// --------------------------
// customQuiz.js
// Custom Quiz Engine ONLY
// --------------------------

let questions = [];
let userAnswers = {};
let startTime = null;
let timerInterval = null;

// --------------------------
// Load Custom Questions
// --------------------------
function loadQuestions() {
  const customCategories =
    JSON.parse(localStorage.getItem("customCategories") || "[]");

  const customDifficulty =
    localStorage.getItem("customDifficulty") || "all";

  fetch("json/custom_quiz.json")
    .then(res => res.json())
    .then(data => {
      let allQuestions = [];

      data.categories.forEach(cat => {
        cat.questions.forEach(q => {
          q.category = cat.id;
          allQuestions.push(q);
        });
      });

      // filter custom quiz questions
      questions = allQuestions.filter(q =>
        customCategories.includes(q.category) &&
        (customDifficulty === "all" || q.difficulty === customDifficulty)
      );

      if (questions.length === 0) {
        alert("No questions found for selected categories/difficulty!");
        return;
      }

      initQuiz();

      // cleanup
      localStorage.removeItem("customCategories");
      localStorage.removeItem("customDifficulty");
    })
    .catch(err => console.error("Error loading custom quiz:", err));
}

// --------------------------
// Initialize Quiz
// --------------------------
function initQuiz() {
  userAnswers = {};
  startTime = Date.now();
  startTimer();
  renderQuestions();
  updateProgress();
}

// --------------------------
// Render Questions
// --------------------------
function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const labels = ["A", "B", "C", "D"];

  questions.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-block";

    qDiv.innerHTML = `
      <div class="question-header">
        <span class="q-number">${index + 1}</span>
        <p class="q-text">${q.question}</p>
      </div>
    `;

    q.options.forEach((option, optIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";

      btn.innerHTML = `
        <span class="option-label">${labels[optIndex]}</span>
        <span class="option-text">${option}</span>
      `;

      btn.onclick = () => {
        userAnswers[index] = option;

        qDiv.querySelectorAll(".option-btn")
          .forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");
        updateProgress();
      };

      qDiv.appendChild(btn);
    });

    container.appendChild(qDiv);
  });

  
}

// --------------------------
// Update Progress
// --------------------------
function updateProgress() {
  const attempted = Object.keys(userAnswers).length;
  const total = questions.length;
  const left = total - attempted;
  const percent = Math.round((attempted / total) * 100);

  document.getElementById("answered-count").innerText = attempted;
  document.getElementById("left-count").innerText = left;
  document.getElementById("percent-count").innerText = percent;

  document.getElementById("sticky-completed").innerText = `${attempted}/${total}`;
  document.getElementById("sticky-percent").innerText = `${percent}%`;
}

// --------------------------
// Timer
// --------------------------
function startTimer() {
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");

    document.getElementById("sticky-timer").innerText = `${mm}:${ss}`;
  }, 1000);
}

// --------------------------
// Submit Quiz
// --------------------------
function submitQuiz() {
  clearInterval(timerInterval);

  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  // ---------------- Result Page Data ----------------
  const resultData = {
    score: score,
    totalQuestions: questions.length,
    attempted: Object.keys(userAnswers).length,
    timeTaken: timeTaken,
    quizType: "custom",
    submittedAt: new Date().toISOString()
  };

  localStorage.setItem("quizResult", JSON.stringify(resultData));

  // ---------------- Leaderboard Data ----------------
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let loggedUser =
    JSON.parse(localStorage.getItem("loggedInUser")) ||
    JSON.parse(sessionStorage.getItem("loggedInUser"));

  if (loggedUser) {

    let index = users.findIndex(u => u.email === loggedUser.email);

    if (index !== -1) {

      // update total score
      users[index].score = (users[index].score || 0) + score;

      // save quiz history
      users[index].history = users[index].history || [];

      users[index].history.push({
        date: new Date().toISOString(),
        score: score,
        total: questions.length,
        quizType: "custom"
      });

      users[index].lastPlayed = Date.now();
    }

    localStorage.setItem("users", JSON.stringify(users));
  }

  // ---------------- Redirect ----------------
  window.location.href = "result.html";
}

// Start Quiz
document.addEventListener("DOMContentLoaded", loadQuestions);