const STORAGE_KEY = "concept-walk-v1";

const starterLessons = [
  {
    id: "ecosystem",
    category: "초등 과학 · 생태계",
    icon: "◌",
    title: "생태계의 상호작용",
    question: "한 종의 수가 달라지면 생태계에는 어떤 변화가 일어날까?",
    bigIdea: "생태계의 구성 요소는 서로 영향을 주고받으며, 한 요소의 변화는 다른 요소와 전체에 영향을 미친다.",
    concepts: [
      { name: "상호작용", meaning: "둘 이상의 생물이나 환경 요소가 서로 영향을 주고받는 관계", example: "꽃의 꿀을 먹는 벌이 꽃가루받이를 돕는다.", notExample: "서로 영향을 주지 않고 각자 존재하는 두 돌" },
      { name: "생태계", meaning: "한 장소의 생물과 그 생물이 살아가는 비생물 환경이 관계를 맺는 체계", example: "연못의 물, 햇빛, 물풀, 물고기, 미생물이 이루는 관계", notExample: "생물만 모아 놓고 물과 햇빛을 고려하지 않은 목록" },
      { name: "균형과 변화", meaning: "생태계는 고정된 상태가 아니라 관계와 환경의 변화에 따라 달라지는 상태", example: "가뭄 뒤 물이 줄면서 연못 생물의 수와 먹이 관계가 바뀐다.", notExample: "생태계의 모든 생물 수가 늘 같은 상태로 유지된다고 보는 것" }
    ],
    scenario: "작은 연못에서 물풀이 줄어든 뒤, 물풀을 먹는 작은 동물도 줄고 그 동물을 먹는 물고기의 수에도 변화가 나타났어요. 관찰 기록은 생태계의 구성 요소들이 서로 연결되어 있음을 보여 줍니다.",
    evidence: [
      { title: "관찰 기록 A", text: "물풀이 크게 줄어든 연못에서 물풀을 먹는 작은 동물의 수도 함께 감소했다." },
      { title: "관찰 기록 B", text: "작은 동물을 먹는 물고기 수는 먹이 변화 뒤에 달라졌지만, 모든 연못에서 같은 정도로 변하지는 않았다." },
      { title: "관찰 기록 C", text: "햇빛과 물의 양이 충분한 곳에서는 물풀이 다시 자라기 시작했다." }
    ],
    quiz: [
      { q: "관찰 기록으로 가장 잘 뒷받침되는 설명은 무엇인가요?", options: ["생태계의 생물은 서로 영향을 주고받을 수 있다.", "한 생물의 변화는 언제나 생태계 전체를 똑같이 바꾼다.", "생태계의 변화는 생물에게만 영향을 준다."], answer: 0, why: "물풀과 작은 동물의 변화가 함께 관찰되었어요. 다만 변화의 정도는 환경에 따라 다를 수 있어요." },
      { q: "‘물풀이 줄면 물고기가 반드시 사라진다’는 말에 가장 필요한 태도는 무엇인가요?", options: ["한 사례만으로 결론을 확정한다.", "다른 먹이와 환경 조건도 살펴본다.", "물풀과 물고기는 관계가 없다고 가정한다."], answer: 1, why: "관계에 대한 일반화를 만들 때에는 다른 먹이와 환경 조건도 함께 살펴야 해요." },
      { q: "생태계의 균형을 가장 알맞게 설명한 것은 무엇인가요?", options: ["생태계의 모든 생물 수가 늘 똑같은 상태", "관계와 환경의 변화에 따라 달라질 수 있는 상태", "생물 사이에 상호작용이 전혀 없는 상태"], answer: 1, why: "생태계는 고정되어 있지 않아요. 여러 요소의 상호작용 속에서 변화합니다." }
    ],
    transfer: "학교 화단에서 꽃의 수가 줄고 벌도 잘 보이지 않는다고 해요. 이 상황을 탐구한다면 무엇을 더 관찰하고, 어떤 관계를 살펴볼까요?"
  },
  {
    id: "fractions",
    category: "초등 수학 · 수와 연산",
    icon: "⅓",
    title: "분수는 무엇을 나타낼까?",
    question: "같은 크기의 전체를 나누는 방법이 달라도 같은 양을 나타낼 수 있을까?",
    bigIdea: "분수는 하나의 전체를 같은 크기로 나눈 단위의 수로 나타내며, 전체의 크기와 나누는 단위를 함께 고려해야 한다.",
    concepts: [
      { name: "전체", meaning: "분수로 나타내려는 기준이 되는 하나의 양", example: "피자 한 판을 전체로 정하고 그중 일부를 살펴본다.", notExample: "크기가 다른 두 피자를 전체를 정하지 않고 바로 비교하는 것" },
      { name: "단위 분수", meaning: "전체를 같은 크기로 나눈 한 부분을 나타내는 분수", example: "한 판을 똑같이 4조각으로 나눈 한 조각은 1/4", notExample: "서로 다른 크기의 조각을 하나의 단위처럼 세는 것" },
      { name: "동치", meaning: "표현은 달라도 같은 양을 나타내는 관계", example: "같은 크기의 전체에서 1/2과 2/4는 같은 양", notExample: "분모가 다르다는 이유만으로 양도 다르다고 판단하는 것" }
    ],
    scenario: "같은 크기의 종이 두 장을 준비했어요. 첫 종이는 2등분해 한 조각을 색칠하고, 둘째 종이는 4등분해 두 조각을 색칠했습니다. 나눈 조각의 수는 다르지만 색칠한 넓이는 같아 보입니다.",
    evidence: [
      { title: "비교 기록 A", text: "두 종이 모두 같은 크기이고, 각각 전체의 1/2과 2/4를 색칠했다." },
      { title: "비교 기록 B", text: "전체의 크기가 다르면 같은 1/2이라도 실제 색칠한 넓이는 달라질 수 있다." },
      { title: "표현 기록 C", text: "분모는 전체를 몇 개의 같은 크기로 나누었는지 나타낸다." }
    ],
    quiz: [
      { q: "1/2과 2/4를 비교할 때 먼저 확인할 것은 무엇인가요?", options: ["전체의 크기가 같은지", "숫자 2가 더 큰지", "분모가 서로 다른지"], answer: 0, why: "분수의 양을 비교하려면 기준이 되는 전체의 크기를 먼저 확인해야 해요." },
      { q: "분수 3/5에서 분모 5가 나타내는 것은 무엇인가요?", options: ["전체를 같은 크기로 나눈 부분의 수", "전체 중에서 선택한 부분의 수", "전체의 크기"], answer: 0, why: "분모는 전체를 몇 개의 같은 크기로 나누었는지 나타내요." },
      { q: "1/2과 같은 양을 나타내는 분수는 무엇인가요?", options: ["2/3", "2/4", "1/3"], answer: 1, why: "같은 크기의 전체를 4등분하면 그중 2조각은 전체의 절반과 같아요." }
    ],
    transfer: "두 친구가 크기가 다른 케이크에서 각각 1/2씩 먹었어요. 누가 더 많이 먹었는지 판단하려면 무엇을 더 알아야 할까요?"
  }
];

const steps = [
  { label: "궁금증 열기", title: "먼저, 내 생각을 꺼내 봐요", description: "정답을 찾기 전에 지금 알고 있는 것과 궁금한 점을 적어 보세요. 처음의 생각은 배움의 출발점이에요." },
  { label: "개념 렌즈", title: "개념을 여러 각도에서 살펴봐요", description: "개념의 뜻, 실제 사례, 그렇지 않은 사례를 비교해 나만의 언어로 정리해요." },
  { label: "탐구와 근거", title: "근거를 모아 설명을 만들어 봐요", description: "관찰 기록을 골라 질문에 답하고, 어떤 근거가 생각을 뒷받침하는지 연결해요." },
  { label: "이해 확인", title: "무엇을 이해했는지 확인해요", description: "세 가지 질문으로 이해를 확인해요. 틀려도 괜찮아요. 피드백을 읽고 다시 생각하면 돼요." },
  { label: "새로운 상황에 적용", title: "배운 개념을 새 상황에 적용해요", description: "처음 보는 상황에서도 개념을 활용해 설명할 수 있는지 확인해요." },
  { label: "성찰과 완료", title: "오늘의 배움을 돌아봐요", description: "처음의 생각과 지금의 생각을 비교하고, 새롭게 알게 된 점을 남겨요." }
];

const emptyState = { progress: {}, sessions: {}, points: 0, badges: [] };
let state = loadState();
let activeLesson = null;
let currentStep = 0;
let toastTimer;

const app = document.getElementById("app");
const toastEl = document.getElementById("toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...emptyState, ...saved };
  } catch (error) {
    console.error("학습 기록을 읽을 수 없습니다.", error);
    return { ...emptyState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    const status = document.querySelector(".save-status");
    if (status) status.innerHTML = '<span class="status-dot"></span> 내 기기에 저장됨';
  } catch (error) {
    console.error("학습 기록을 저장할 수 없습니다.", error);
    showToast("저장 공간이 부족해요. 브라우저 저장 공간을 확인해 주세요.");
  }
}

function getLessons() {
  return [...starterLessons, ...(state.customLessons || [])];
}

function getSession(id) {
  if (!state.sessions[id]) {
    state.sessions[id] = { step: 0, answers: {}, selectedEvidence: [], readConcepts: [], quizAnswers: {}, quizChecked: false, rubric: [] };
  }
  return state.sessions[id];
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 2400);
}

function setNav(view) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", (view === "home" && link.dataset.action === "home") || (view === "studio" && link.dataset.action === "studio"));
  });
}

function renderHome() {
  activeLesson = null;
  setNav("home");
  const lessons = getLessons();
  const completed = lessons.filter((lesson) => state.progress[lesson.id] === steps.length).length;
  const inProgress = lessons.filter((lesson) => state.progress[lesson.id] > 0 && state.progress[lesson.id] < steps.length).length;
  app.innerHTML = `
    <section class="dashboard-head">
      <div>
        <div class="eyebrow">오늘의 학습 · YOUR LEARNING PATH</div>
        <h1 class="page-heading">개념을 연결하는<br>나만의 학습 여정</h1>
        <p class="page-subtitle">외우기보다 이해하고, 이해한 것을 새로운 상황에 써 보세요.</p>
      </div>
      <button class="primary-button" data-action="studio"><span aria-hidden="true">＋</span> 교과서로 수업 만들기</button>
    </section>
    <section class="stats-row" aria-label="학습 통계">
      <div class="stat-card"><span class="stat-icon">✦</span><div><span class="stat-value">${state.points}</span><span class="stat-label">모은 탐구 포인트</span></div></div>
      <div class="stat-card"><span class="stat-icon">◷</span><div><span class="stat-value">${inProgress}</span><span class="stat-label">이어 하는 학습</span></div></div>
      <div class="stat-card"><span class="stat-icon">✓</span><div><span class="stat-value">${completed}</span><span class="stat-label">완료한 개념 여정</span></div></div>
    </section>
    <section aria-labelledby="lessons-title">
      <div class="section-heading"><div><h2 id="lessons-title">개념 여정</h2><p>짧은 학습을 골라 지금 시작해 보세요.</p></div><span class="eyebrow">START HERE</span></div>
      <div class="lesson-grid">${lessons.map(renderLessonCard).join("")}</div>
    </section>
    <section class="custom-card">
      <div><strong>교과서에 나온 개념으로 시작하고 싶나요?</strong><p>단원, 핵심 개념, 교과서의 설명을 입력하면 탐구 질문부터 전이 활동까지 이어지는 학습을 만들어요.</p></div>
      <button class="custom-plus" data-action="studio" aria-label="나만의 수업 만들기">＋</button>
    </section>
  `;
}

function renderLessonCard(lesson, index) {
  const progress = state.progress[lesson.id] || 0;
  const percent = Math.round((progress / steps.length) * 100);
  const complete = percent === 100;
  return `
    <article class="lesson-card ${index % 2 ? "blue" : ""}" data-action="lesson" data-id="${escapeHtml(lesson.id)}" tabindex="0" role="button" aria-label="${escapeHtml(lesson.title)} 학습 시작">
      <div class="lesson-top"><span class="subject-tag">${escapeHtml(lesson.category || "나만의 개념")}</span><span class="lesson-icon" aria-hidden="true">${escapeHtml(lesson.icon || "✳")}</span></div>
      <div class="lesson-content"><h3 class="lesson-title">${escapeHtml(lesson.title)}</h3><p class="lesson-question">${escapeHtml(lesson.question)}</p></div>
      <div class="lesson-bottom"><div class="card-progress"><div class="progress-track"><span style="width:${percent}%"></span></div><span class="progress-copy">${complete ? "완료" : progress ? `${progress}/${steps.length} 단계` : "새 여정"}</span></div><span class="arrow-link">${complete ? "다시 보기" : progress ? "이어 하기" : "시작하기"} →</span></div>
    </article>
  `;
}

function renderStudio() {
  activeLesson = null;
  setNav("studio");
  app.innerHTML = `
    <section class="studio">
      <div class="eyebrow">BUILD YOUR OWN LEARNING PATH</div>
      <h1 class="page-heading">교과서 개념으로<br>나만의 수업 만들기</h1>
      <p class="page-subtitle">교과서 문장을 바탕으로 질문하고, 근거를 찾고, 배움을 새 상황에 연결해요.<br>입력한 내용은 이 기기에만 저장됩니다.</p>
      <form class="studio-card" id="lesson-form">
        <div class="form-grid">
          <div class="field"><label for="subject">교과와 단원</label><input id="subject" name="subject" maxlength="60" placeholder="예: 과학 · 생태계" required></div>
          <div class="field"><label for="concept">핵심 개념</label><input id="concept" name="concept" maxlength="40" placeholder="예: 상호작용" required></div>
          <div class="field full"><label for="question">탐구 질문</label><input id="question" name="question" maxlength="120" placeholder="예: 한 요소의 변화는 생태계에 어떤 영향을 줄까?" required></div>
          <div class="field full"><label for="big-idea">교과서의 설명 또는 핵심 문장 <span class="optional">· 선택</span></label><textarea id="big-idea" name="bigIdea" maxlength="700" placeholder="교과서의 문장을 짧게 옮기거나 핵심 내용을 내 말로 적어 주세요. 학습 중 개념 렌즈와 전이 활동에 참고합니다."></textarea><span class="field-hint">교과서 설명이 아직 없어도 괜찮아요. 직접 입력하면 그 내용을 중심으로 학습을 구성합니다.</span></div>
        </div>
        <div class="source-note"><strong>수업의 흐름</strong> &nbsp; 궁금증 열기 → 개념의 뜻·사례·비사례 살펴보기 → 근거로 설명하기 → 이해 확인 → 새 상황에 적용하기</div>
        <div class="form-actions"><button type="button" class="quiet-button" data-action="home">← 돌아가기</button><button type="submit" class="primary-button">이 개념으로 시작하기 <span aria-hidden="true">→</span></button></div>
      </form>
    </section>
  `;
}

function openLesson(id) {
  const lesson = getLessons().find((item) => item.id === id);
  if (!lesson) return;
  activeLesson = lesson;
  currentStep = Math.min(getSession(id).step || 0, steps.length - 1);
  setNav("home");
  renderLearning();
}

function renderLearning() {
  if (!activeLesson) return renderHome();
  const session = getSession(activeLesson.id);
  const step = currentStep;
  session.step = step;
  const percent = Math.round((step / steps.length) * 100);
  app.innerHTML = `
    <div class="learning-layout">
      <section class="learning-main" aria-live="polite">
        <div class="lesson-breadcrumb"><button class="crumb-link" data-action="home">개념 여정</button><span class="crumb-sep">/</span><span>${escapeHtml(activeLesson.title)}</span></div>
        <div class="step-topline"><span class="step-label"><span class="step-number">${String(step + 1).padStart(2, "0")}</span>${steps[step].label}</span><span class="step-count">${step + 1} / ${steps.length}</span></div>
        <h1 class="stage-title">${steps[step].title}</h1>
        <p class="stage-description">${steps[step].description}</p>
        <div id="stage-content">${renderStage(step, session)}</div>
        <div class="stage-footer">
          <span class="save-hint">✦ 학습 내용은 이 기기에 자동 저장돼요.</span>
          <div class="stage-actions">
            <button class="quiet-button" data-action="prev" ${step === 0 ? "hidden" : ""}>← 이전</button>
            ${step < steps.length - 1
              ? `<button class="primary-button" data-action="next" ${isStepLocked(step, session) ? "disabled" : ""}>${step === 0 ? "생각 저장하고 계속" : step === 4 ? "성찰하기" : "다음 단계"} <span aria-hidden="true">→</span></button>`
              : `<button class="primary-button" data-action="finish" ${isStepLocked(step, session) ? "disabled" : ""}>여정 완료하기 <span aria-hidden="true">✓</span></button>`}
          </div>
        </div>
      </section>
      <aside class="learning-aside">
        <div class="progress-rail"><span style="width:${percent}%"></span></div>
        <div class="aside-kicker">TODAY'S BIG IDEA</div>
        <h2 class="aside-title">${escapeHtml(activeLesson.bigIdea || `${activeLesson.concept || activeLesson.title}를 여러 상황과 연결해 설명해 봐요.`)}</h2>
        <div class="aside-divider"></div>
        <div class="aside-kicker">개념 렌즈</div>
        <div class="concept-list">${activeLesson.concepts.map((concept, i) => `<div class="lens-item"><div class="lens-name"><span class="lens-dot" style="background:${["#74a183", "#d19a61", "#7899ae"][i % 3]}"></span>${escapeHtml(concept.name)}</div><p class="lens-text">${escapeHtml(concept.meaning)}</p></div>`).join("")}</div>
        <div class="aside-tip"><strong>생각의 팁</strong><br>개념을 한 문장으로 설명한 뒤, 다른 상황에서도 그 설명이 맞는지 살펴보세요.</div>
      </aside>
    </div>
  `;
  updateProgress(activeLesson.id, step);
}

function renderStage(step, session) {
  const lesson = activeLesson;
  const answers = session.answers;
  if (step === 0) {
    return `
      <div class="prompt-card"><span class="prompt-label">오늘의 탐구 질문</span><p class="prompt-text">${escapeHtml(lesson.question)}</p></div>
      <div class="scenario">${escapeHtml(lesson.scenario)}</div>
      <label class="answer-label" for="answer-start"><span>지금 떠오르는 생각</span><span class="char-count" id="count-start">0자</span></label>
      <textarea class="answer-box" id="answer-start" data-answer="start" maxlength="500" placeholder="내 생각을 편하게 적어 보세요. 학습이 끝난 뒤 다시 읽어볼 거예요.">${escapeHtml(answers.start || "")}</textarea>
    `;
  }
  if (step === 1) {
    const read = new Set(session.readConcepts || []);
    return `
      <div class="prompt-card"><span class="prompt-label">개념의 뜻 · 사례 · 비사례</span><p class="prompt-text">세 가지 렌즈를 읽고, 내가 설명할 수 있는 개념으로 표시해 보세요.</p></div>
      <div class="lens-grid">${lesson.concepts.map((item, index) => `
        <button class="lens-card ${read.has(index) ? "is-read" : ""}" data-action="read-concept" data-index="${index}" aria-pressed="${read.has(index)}">
          <div class="lens-card-top"><h3>${escapeHtml(item.name)}</h3><span class="read-check">${read.has(index) ? "✓" : ""}</span></div>
          <p>${escapeHtml(item.meaning)}</p><div class="mini-label">사례</div><p>${escapeHtml(item.example)}</p><div class="mini-label">비사례</div><p>${escapeHtml(item.notExample)}</p>
        </button>`).join("")}</div>
      <label class="answer-label" for="answer-definition"><span>내 말로 개념을 설명해 보기</span><span class="char-count" id="count-definition">${(answers.definition || "").length}자</span></label>
      <textarea class="answer-box" id="answer-definition" data-answer="definition" maxlength="500" placeholder="뜻을 그대로 옮기기보다, 사례와 비사례를 비교해 내 언어로 설명해 보세요.">${escapeHtml(answers.definition || "")}</textarea>
      <p class="field-hint">개념 카드 ${read.size}/${lesson.concepts.length}개 확인 · 설명은 10자 이상 적어 주세요.</p>
    `;
  }
  if (step === 2) {
    const selected = new Set(session.selectedEvidence || []);
    return `
      <div class="prompt-card"><span class="prompt-label">관찰 기록을 골라요</span><p class="prompt-text">탐구 질문에 답하는 데 도움이 되는 근거를 두 가지 이상 선택해 보세요.</p></div>
      <div class="evidence-list">${lesson.evidence.map((item, index) => `
        <button class="evidence-card ${selected.has(index) ? "is-selected" : ""}" data-action="evidence" data-index="${index}" aria-pressed="${selected.has(index)}">
          <span class="evidence-check">${selected.has(index) ? "✓" : ""}</span><span class="evidence-copy"><strong>${escapeHtml(item.title)}</strong>${escapeHtml(item.text)}</span>
        </button>`).join("")}</div>
      <label class="answer-label" for="answer-claim"><span>근거를 연결해 내 설명 쓰기</span><span class="char-count" id="count-claim">${(answers.claim || "").length}자</span></label>
      <textarea class="answer-box" id="answer-claim" data-answer="claim" maxlength="700" placeholder="선택한 기록을 바탕으로 생각을 설명해 보세요. ‘왜냐하면 … 기록에서 …을 볼 수 있기 때문이다’처럼 근거와 주장을 연결할 수 있어요.">${escapeHtml(answers.claim || "")}</textarea>
      <p class="field-hint">근거 ${selected.size}개 선택 · 설명은 15자 이상 적어 주세요.</p>
    `;
  }
  if (step === 3) {
    return `
      <div class="prompt-card"><span class="prompt-label">빠른 이해 확인 · 3문항</span><p class="prompt-text">각 질문에 가장 알맞은 답을 고른 뒤, 피드백에서 이유를 확인해요.</p></div>
      <div class="quiz-list">${lesson.quiz.map((item, qIndex) => `
        <fieldset class="quiz-item"><legend class="quiz-q">${qIndex + 1}. ${escapeHtml(item.q)}</legend><div class="quiz-options">${item.options.map((option, oIndex) => `
          <label class="quiz-option"><input type="radio" name="quiz-${qIndex}" value="${oIndex}" ${String(session.quizAnswers[qIndex]) === String(oIndex) ? "checked" : ""}><span>${escapeHtml(option)}</span></label>`).join("")}</div></fieldset>
      `).join("")}</div>
      ${session.quizChecked ? renderQuizFeedback(session) : `<button class="secondary-button" data-action="check-quiz">답 확인하기</button>`}
    `;
  }
  if (step === 4) {
    const rubric = new Set(session.rubric || []);
    return `
      <div class="prompt-card"><span class="prompt-label">TRANSFER · 배운 개념을 꺼내 쓰기</span><p class="prompt-text">${escapeHtml(lesson.transfer)}</p></div>
      <div class="scenario"><strong>새로운 상황</strong><br>앞에서 다룬 사례를 그대로 반복하지 않고, 배운 개념을 새로운 맥락에 연결해 설명해 보세요.</div>
      <label class="answer-label" for="answer-transfer"><span>나의 설명</span><span class="char-count" id="count-transfer">${(answers.transfer || "").length}자</span></label>
      <textarea class="answer-box" id="answer-transfer" data-answer="transfer" maxlength="700" placeholder="어떤 개념을 적용했는지, 상황의 어느 부분이 근거인지 적어 보세요.">${escapeHtml(answers.transfer || "")}</textarea>
      <div class="answer-label"><span>내 설명 돌아보기</span><span class="char-count">정답 채점이 아닌 자기 점검</span></div>
      <div class="rubric-list">
        ${["배운 개념을 정확한 말로 사용했어요.", "새 상황에서 찾은 근거를 설명에 연결했어요.", "조건이 달라지면 결과도 달라질 수 있음을 고려했어요."].map((text, index) => `<label class="rubric-item"><input type="checkbox" data-action="rubric" data-index="${index}" ${rubric.has(index) ? "checked" : ""}><span>${text}</span></label>`).join("")}
      </div>
    `;
  }
  return `
    <div class="finish-card"><div class="finish-icon" aria-hidden="true">✦</div><h3>개념 여정을 마쳤어요!</h3><p>새로운 상황에서 개념을 꺼내 설명한 것이 가장 중요한 성과예요.<br>배지는 기록을 위한 것이고, 생각이 자란 과정이 진짜 보상이에요.</p>
      <div class="finish-summary"><strong>처음의 생각</strong><br>${escapeHtml(answers.start || "아직 기록하지 않았어요.")}<br><br><strong>오늘의 배움</strong><br>${escapeHtml(answers.reflection || "오늘 이해한 점과 더 궁금한 점을 기록했어요.")}</div>
    </div>
    <label class="answer-label" for="answer-reflection"><span>오늘의 배움과 다음 질문</span><span class="char-count" id="count-reflection">${(answers.reflection || "").length}자</span></label>
    <textarea class="answer-box" id="answer-reflection" data-answer="reflection" maxlength="500" placeholder="처음 생각과 달라진 점은 무엇인가요? 아직 궁금한 점도 적어 보세요.">${escapeHtml(answers.reflection || "")}</textarea>
  `;
}

function renderQuizFeedback(session) {
  const correctCount = activeLesson.quiz.reduce((sum, item, index) => sum + (Number(session.quizAnswers[index]) === item.answer ? 1 : 0), 0);
  const allCorrect = correctCount === activeLesson.quiz.length;
  return `<div class="quiz-feedback ${allCorrect ? "good" : "try"}"><strong>${allCorrect ? "세 문항 모두 잘 풀었어요!" : `${correctCount}/${activeLesson.quiz.length}문항을 맞혔어요.`}</strong><br>${activeLesson.quiz.map((item, index) => `${index + 1}. ${escapeHtml(item.why)}`).join("<br>")}</div>${!allCorrect ? `<button class="quiet-button" data-action="retry-quiz">다시 풀어 보기</button>` : ""}`;
}

function isStepLocked(step, session) {
  if (step === 0) return (session.answers.start || "").trim().length < 5;
  if (step === 1) return (session.readConcepts || []).length < activeLesson.concepts.length || (session.answers.definition || "").trim().length < 10;
  if (step === 2) return (session.selectedEvidence || []).length < 2 || (session.answers.claim || "").trim().length < 15;
  if (step === 3) return !session.quizChecked || activeLesson.quiz.some((_, index) => Number(session.quizAnswers[index]) !== activeLesson.quiz[index].answer);
  if (step === 4) return (session.answers.transfer || "").trim().length < 20 || (session.rubric || []).length < 2;
  if (step === 5) return (session.answers.reflection || "").trim().length < 10;
  return false;
}

function updateProgress(id, step) {
  state.progress[id] = Math.max(state.progress[id] || 0, step);
  saveState();
}

function updateAnswerCount(key, value) {
  const count = document.getElementById(`count-${key}`);
  if (count) count.textContent = `${value.length}자`;
}

function checkQuiz() {
  const session = getSession(activeLesson.id);
  const answers = {};
  activeLesson.quiz.forEach((_, index) => {
    const checked = document.querySelector(`input[name="quiz-${index}"]:checked`);
    if (checked) answers[index] = Number(checked.value);
  });
  if (Object.keys(answers).length !== activeLesson.quiz.length) {
    showToast("세 문항에 모두 답을 골라 주세요.");
    return;
  }
  session.quizAnswers = answers;
  session.quizChecked = true;
  const correct = activeLesson.quiz.every((item, index) => answers[index] === item.answer);
  if (correct && !session.quizAwarded) {
    state.points += 15;
    session.quizAwarded = true;
  }
  saveState();
  renderLearning();
}

function completeJourney() {
  const session = getSession(activeLesson.id);
  if (isStepLocked(5, session)) return;
  if (state.progress[activeLesson.id] !== steps.length && !session.completionAwarded) {
    state.points += 25;
    session.completionAwarded = true;
  }
  state.progress[activeLesson.id] = steps.length;
  if (!state.badges.includes(activeLesson.id)) state.badges.push(activeLesson.id);
  saveState();
  showToast("개념 여정을 완료했어요! 배움의 기록을 저장했어요.");
  renderLearning();
}

function createLesson(form) {
  const values = new FormData(form);
  const subject = String(values.get("subject") || "").trim();
  const concept = String(values.get("concept") || "").trim();
  const question = String(values.get("question") || "").trim();
  const source = String(values.get("bigIdea") || "").trim();
  if (!subject || !concept || !question) return;
  const lesson = {
    id: `custom-${Date.now()}`,
    category: subject,
    title: `${concept} 이해하기`,
    concept,
    question,
    bigIdea: source || `${concept}의 뜻과 사례를 살펴보고, 새로운 상황에서도 어떻게 설명할 수 있는지 탐구해요.`,
    concepts: [
      { name: concept, meaning: source || `교과서에서 ${concept}을(를) 어떻게 설명하는지 살펴봐요.`, example: "교과서의 문장이나 주변의 구체적인 사례를 찾아보세요.", notExample: "핵심 개념이 드러나지 않는 사례와 비교해 보세요." },
      { name: "사례와 맥락", meaning: "개념이 실제 상황에서 어떻게 드러나는지 살펴보는 관점", example: "개념을 보여 주는 구체적인 상황을 찾는다.", notExample: "사례의 특징을 확인하지 않고 이름만 붙인다." },
      { name: "관계와 변화", meaning: "개념이 다른 요소와 맺는 관계와 조건에 따른 변화를 살펴보는 관점", example: "조건이나 요소가 달라졌을 때 나타나는 차이를 비교한다.", notExample: "상황과 조건이 달라도 늘 같은 결과라고 단정한다." }
    ],
    scenario: source ? `교과서에서 가져온 설명을 살펴보며 생각해 봐요. “${source.slice(0, 260)}” 이 설명에서 핵심 개념이 무엇이고, 어떤 상황에서 적용될 수 있을까요?` : `교과서에서 ${concept}을(를) 다룬 부분을 다시 읽으며, 정의와 구체적인 사례를 찾아보세요. 질문 “${question}”에 대한 지금의 생각을 적어 봐요.`,
    evidence: [
      { title: "교과서 문장", text: source ? source.slice(0, 320) : "교과서에서 이 개념의 정의나 설명이 담긴 문장을 직접 찾아 적어 보세요." },
      { title: "구체적인 사례", text: "개념이 실제로 드러나는 예를 교과서나 주변에서 찾아, 어떤 특징이 핵심인지 살펴보세요." },
      { title: "비교할 조건", text: "조건이나 요소가 달라졌을 때 무엇이 달라지는지 비교해 설명의 범위를 살펴보세요." }
    ],
    quiz: [
      { q: `교과서의 ‘${concept}’ 설명을 이해할 때 가장 도움이 되는 방법은 무엇인가요?`, options: ["핵심 뜻을 사례와 연결해 설명한다.", "정의 문장을 그대로 외우고 사례는 보지 않는다.", "한 사례만 보고 모든 경우에 똑같이 적용한다."], answer: 0, why: "개념의 뜻과 사례를 연결해야 단순 암기를 넘어 이해할 수 있어요." },
      { q: "새로운 사례에 개념을 적용할 때 확인할 것은 무엇인가요?", options: ["사례가 익숙한지 여부만", "핵심 특징과 상황의 조건", "사례의 이름이 같은지"], answer: 1, why: "이름이 아니라 개념의 핵심 특징과 상황의 조건을 살펴야 해요." },
      { q: "내 설명이 충분한지 돌아보는 가장 좋은 방법은 무엇인가요?", options: ["외운 문장을 빠르게 말한다.", "근거를 들어 설명하고 다른 상황에도 적용해 본다.", "틀릴 수 있으니 설명을 멈춘다."], answer: 1, why: "근거를 들어 설명하고 새로운 상황에 적용하면 이해의 깊이를 확인할 수 있어요." }
    ],
    transfer: `교과서에서 배운 ${concept}을(를) 일상이나 다른 단원에서 볼 수 있는 새로운 상황에 적용해 보세요. 어떤 근거로 그렇게 설명할 수 있나요?`,
    custom: true
  };
  state.customLessons = [...(state.customLessons || []), lesson];
  saveState();
  openLesson(lesson.id);
}

function showAbout() {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.setAttribute("role", "presentation");
  overlay.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-head"><h2 id="modal-title">외우기보다 이해하는 학습</h2><button class="modal-close" data-action="close-modal" aria-label="닫기">×</button></div>
      <p class="modal-body">세 가지 참고 자료의 수업 설계 원리를 학습 흐름에 반영했어요. 개념을 뜻·사례·비사례로 살펴보고, 질문을 중심으로 근거를 골라 설명하고, 마지막에 새로운 상황에 적용하도록 구성했습니다. 이해 확인에는 정답과 함께 이유를 알려 주는 피드백을 제공해요.</p>
      <div class="method-tags"><span class="method-tag">개념 렌즈와 일반화</span><span class="method-tag">구조화된 탐구와 점진적 스캐폴딩</span><span class="method-tag">질문·형성 평가·피드백</span><span class="method-tag">목표·진행·성취의 게임화</span></div>
      <div class="modal-source">참고 자료: 『개념기반탐구학습의실천』 핵심 정리본, 『게이미피케이션개론』 상세 정리본, 『질문과평가로깊어지는수업』 핵심 정리본<br>학습 기록은 외부로 전송하지 않고 이 브라우저의 저장 공간에 보관합니다.</div>
    </section>`;
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest('[data-action="close-modal"]')) overlay.remove();
  });
  document.body.appendChild(overlay);
  overlay.querySelector(".modal-close").focus();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "home") renderHome();
  if (action === "studio") renderStudio();
  if (action === "about") showAbout();
  if (action === "lesson") openLesson(target.dataset.id);
  if (action === "read-concept") {
    const session = getSession(activeLesson.id);
    const index = Number(target.dataset.index);
    const read = new Set(session.readConcepts || []);
    read.has(index) ? read.delete(index) : read.add(index);
    session.readConcepts = [...read];
    saveState();
    renderLearning();
  }
  if (action === "evidence") {
    const session = getSession(activeLesson.id);
    const index = Number(target.dataset.index);
    const selected = new Set(session.selectedEvidence || []);
    selected.has(index) ? selected.delete(index) : selected.add(index);
    session.selectedEvidence = [...selected];
    saveState();
    renderLearning();
  }
  if (action === "next") {
    const session = getSession(activeLesson.id);
    if (isStepLocked(currentStep, session)) return;
    if (!session.awardedSteps) session.awardedSteps = [];
    if (!session.awardedSteps.includes(currentStep)) {
      state.points += 10;
      session.awardedSteps.push(currentStep);
    }
    currentStep += 1;
    session.step = currentStep;
    saveState();
    renderLearning();
    app.focus();
  }
  if (action === "prev" && currentStep > 0) {
    currentStep -= 1;
    getSession(activeLesson.id).step = currentStep;
    renderLearning();
    app.focus();
  }
  if (action === "check-quiz") checkQuiz();
  if (action === "retry-quiz") {
    const session = getSession(activeLesson.id);
    session.quizChecked = false;
    renderLearning();
  }
  if (action === "finish") completeJourney();
});

document.addEventListener("input", (event) => {
  const field = event.target.closest("[data-answer]");
  if (!field || !activeLesson) return;
  const session = getSession(activeLesson.id);
  session.answers[field.dataset.answer] = field.value;
  const countKey = { start: "start", definition: "definition", claim: "claim", transfer: "transfer", reflection: "reflection" }[field.dataset.answer];
  updateAnswerCount(countKey, field.value);
  saveState();
  const nextButton = document.querySelector('[data-action="next"], [data-action="finish"]');
  if (nextButton) nextButton.disabled = isStepLocked(currentStep, session);
});

document.addEventListener("change", (event) => {
  if (!activeLesson) return;
  const rubricInput = event.target.closest('input[data-action="rubric"]');
  if (rubricInput) {
    const session = getSession(activeLesson.id);
    const selected = new Set(session.rubric || []);
    const index = Number(rubricInput.dataset.index);
    rubricInput.checked ? selected.add(index) : selected.delete(index);
    session.rubric = [...selected];
    saveState();
    const nextButton = document.querySelector('[data-action="next"], [data-action="finish"]');
    if (nextButton) nextButton.disabled = isStepLocked(currentStep, session);
  }
  const answer = event.target.closest('input[name^="quiz-"]');
  if (answer) {
    const session = getSession(activeLesson.id);
    const index = Number(answer.name.split("-")[1]);
    session.quizAnswers[index] = Number(answer.value);
    session.quizChecked = false;
    saveState();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "lesson-form") return;
  event.preventDefault();
  createLesson(event.target);
});

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".lesson-card")) {
    event.preventDefault();
    openLesson(event.target.dataset.id);
  }
  if (event.key === "Escape") document.querySelector(".modal-backdrop")?.remove();
});

renderHome();
