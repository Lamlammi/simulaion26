"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawn, spawnSync } = require("node:child_process");
const { once } = require("node:events");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");
const ffmpeg = require("ffmpeg-static");

const ROOT = __dirname;
const WIDTH = 1920;
const HEIGHT = 1080;
const FPS = 60;
const SUBFRAMES = 3;
const DURATION = 15;
const TOTAL_FRAMES = FPS * DURATION;
const HTML_PATH = path.join(ROOT, "intro.html");
const TEMP_ROOT = path.join(ROOT, ".intro-render");
const OUTPUT_PATH = path.join(ROOT, "intro.mp4");
const AUDIO_PATH = path.join(ROOT, "intro.wav");
const SILENT_PATH = path.join(TEMP_ROOT, "intro-silent.mp4");

function runFfmpeg(args, label) {
  const result = spawnSync(ffmpeg, args, { cwd: ROOT, encoding: "utf8", windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${label} failed (exit ${result.status}).\n${result.stderr || result.stdout}`);
  }
}

async function openPage() {
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
    args: ["--disable-gpu"]
  });
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1
  });
  page.on("pageerror", (error) => console.error("Page error:", error.message));
  await page.goto(pathToFileURL(HTML_PATH).href, { waitUntil: "load" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    window.seek(0);
  });
  return { browser, page };
}

async function renderBeatSheet(page) {
  const directory = path.join(TEMP_ROOT, "storyboard");
  fs.mkdirSync(directory, { recursive: true });
  for (let beat = 0; beat < DURATION * 2; beat += 1) {
    const time = Math.min(DURATION - 1 / FPS, beat * 0.5 + 0.25);
    await page.evaluate((value) => window.seek(value), time);
    const frame = await page.screenshot({ type: "png" });
    const filename = path.join(directory, `beat-${String(beat).padStart(2, "0")}.png`);
    fs.writeFileSync(filename, frame);
    if ((beat + 1) % 10 === 0) console.log(`Storyboard: ${beat + 1}/${DURATION * 2} beats`);
  }
  const sheetPath = path.join(TEMP_ROOT, "storyboard.png");
  runFfmpeg([
    "-hide_banner", "-loglevel", "error", "-y",
    "-framerate", "1",
    "-i", path.join(directory, "beat-%02d.png"),
    "-vf", "scale=320:180,tile=5x6:padding=2:margin=2:color=white",
    "-frames:v", "1", sheetPath
  ], "Beat storyboard");
  console.log(`Storyboard saved: ${sheetPath}`);
}

function startVideoEncoder() {
  const filter = `tmix=frames=${SUBFRAMES}:weights='${Array(SUBFRAMES).fill("1").join(" ")}':scale=${1 / SUBFRAMES},fps=${FPS}`;
  const process = spawn(ffmpeg, [
    "-hide_banner", "-loglevel", "warning", "-y",
    "-f", "image2pipe", "-framerate", String(FPS * SUBFRAMES), "-vcodec", "png", "-i", "pipe:0",
    "-vf", filter,
    "-frames:v", String(TOTAL_FRAMES),
    "-an", "-c:v", "libx264", "-preset", "medium", "-crf", "18",
    "-pix_fmt", "yuv420p", "-r", String(FPS), SILENT_PATH
  ], {
    cwd: ROOT,
    windowsHide: true,
    stdio: ["pipe", "ignore", "pipe"]
  });
  let errors = "";
  process.stderr.setEncoding("utf8");
  process.stderr.on("data", (chunk) => { errors += chunk; });
  return { process, get errors() { return errors; } };
}

async function sendFrame(stream, bytes) {
  if (!stream.write(bytes)) await once(stream, "drain");
}

async function renderAnimation(page) {
  fs.mkdirSync(TEMP_ROOT, { recursive: true });
  const encoder = startVideoEncoder();
  for (let frame = 0; frame < TOTAL_FRAMES; frame += 1) {
    for (let subframe = 0; subframe < SUBFRAMES; subframe += 1) {
      const time = frame / FPS + (subframe + 0.5) / (FPS * SUBFRAMES);
      await page.evaluate((value) => window.seek(value), time);
      await sendFrame(encoder.process.stdin, await page.screenshot({ type: "png" }));
    }
    if ((frame + 1) % (FPS * 3) === 0) {
      console.log(`Rendered ${frame + 1}/${TOTAL_FRAMES} frames`);
    }
  }
  encoder.process.stdin.end();
  const [code] = await once(encoder.process, "close");
  if (code !== 0) throw new Error(`Silent video render failed (exit ${code}).\n${encoder.errors}`);
}

async function renderAudio(page) {
  const base64 = await page.evaluate(() => window.renderAudioWav());
  fs.writeFileSync(AUDIO_PATH, Buffer.from(base64, "base64"));
  const header = Buffer.alloc(44);
  const audio = fs.readFileSync(AUDIO_PATH);
  audio.copy(header, 0, 0, 44);
  const duration = header.readUInt32LE(40) / (header.readUInt32LE(24) * header.readUInt16LE(22) * 2);
  if (Math.abs(duration - DURATION) > 0.01) {
    throw new Error(`Expected ${DURATION}s soundtrack, received ${duration.toFixed(3)}s.`);
  }
  console.log(`Soundtrack rendered: ${AUDIO_PATH} (${duration.toFixed(2)}s)`);
}

function muxAudio() {
  runFfmpeg([
    "-hide_banner", "-loglevel", "error", "-y",
    "-i", SILENT_PATH, "-i", AUDIO_PATH,
    "-map", "0:v:0", "-map", "1:a:0",
    "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
    "-shortest", "-movflags", "+faststart", OUTPUT_PATH
  ], "Audio mux");
  console.log(`Final intro saved: ${OUTPUT_PATH}`);
}

async function main() {
  if (!ffmpeg || !fs.existsSync(ffmpeg)) throw new Error("The ffmpeg-static executable is unavailable.");
  if (!fs.existsSync(HTML_PATH)) throw new Error(`Missing animation source: ${HTML_PATH}`);
  fs.mkdirSync(TEMP_ROOT, { recursive: true });
  const { browser, page } = await openPage();
  try {
    if (process.argv.includes("--storyboard")) {
      await renderBeatSheet(page);
      return;
    }
    await renderAnimation(page);
    await renderAudio(page);
    muxAudio();
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
