
// Global State
// =======================
let questions = [];
let userAnswers = {};
let startTime = null;
let timerInterval = null;

// =======================
// Start Standard Quiz
// =======================
function startStandardQuiz() {
  fetch("json/standard_quiz.json")
    .then(res => res.json())
    .then(data => {
      questions = data.standard_quiz;
      initQuiz();
    })
    .catch(err => console.error("Quiz load error:", err));
}

// =======================
// Initialize Quiz
// =======================
function initQuiz() {
  userAnswers = {};
  startTime = Date.now();
  renderQuestions();
  startTimer();
  updateProgress();
}

// =======================
// Render Questions
// =======================
function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-block";

    qDiv.innerHTML = `
      <div class="question-header">
        <span class="q-number">${index + 1}</span>
        <p class="q-text">${q.question}</p>
      </div>
    `;

    const labels = ["A", "B", "C", "D"];

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-label">${labels[i]}</span>
        <span class="option-text">${opt}</span>
      `;
      btn.onclick = () => selectOption(index, opt, btn);
      qDiv.appendChild(btn);
    });

    container.appendChild(qDiv);
  });
}

// =======================
// Select Option
// =======================
function selectOption(qIndex, option, btn) {
  userAnswers[qIndex] = option;

  const buttons = btn.parentElement.querySelectorAll(".option-btn");
  buttons.forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");

  updateProgress();
}

// =======================
// Progress Update (TOP + BOTTOM)
// =======================
function updateProgress() {
  const attempted = Object.keys(userAnswers).length;
  const total = questions.length;
  const left = total - attempted;
  const percent = total ? Math.round((attempted / total) * 100) : 0;

  // Top
  document.getElementById("answered-count").innerText = attempted;
  document.getElementById("left-count").innerText = left;
  document.getElementById("percent-count").innerText = percent;

  // Bottom sticky
  document.getElementById("sticky-completed").innerText =
    `${attempted}/${total}`;
  document.getElementById("sticky-percent").innerText = `${percent}%`;
}

// =======================
// Timer
// =======================
function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");

    document.getElementById("sticky-timer").innerText = `${mm}:${ss}`;
  }, 1000);
}

// =======================
// Submit Quiz
// =======================
function submitQuiz() {

  clearInterval(timerInterval);

  let score = 0;

  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  // ---------- Result Page Data ----------
  const resultData = {
    score: score,
    totalQuestions: questions.length,
    attempted: Object.keys(userAnswers).length,
    timeTaken: timeTaken,
    quizType: "standard",
    submittedAt: new Date().toISOString()
  };

  localStorage.setItem("quizResult", JSON.stringify(resultData));

  // ---------- Leaderboard Data ----------
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let loggedUser =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(sessionStorage.getItem("loggedInUser"));

  if (loggedUser) {

    let index = users.findIndex(u => u.email === loggedUser.email);

    if (index !== -1) {

      // update total score
      users[index].score = (users[index].score || 0) + score;

      // save history
      users[index].history = users[index].history || [];

      users[index].history.push({
        date: new Date().toISOString(),
        score: score
      });

      users[index].lastPlayed = Date.now();
    }

    localStorage.setItem("users", JSON.stringify(users));
  }

  // ---------- Redirect ----------
  window.location.href = "result.html";
}