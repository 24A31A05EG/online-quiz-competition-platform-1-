const result = JSON.parse(localStorage.getItem("quizResult"));

if(result){

const total = result.totalQuestions || result.total;

const percent = Math.round((result.score / total) * 100);

document.getElementById("correctCount").innerText = result.score;

document.getElementById("totalQuestions").innerText = total;

document.getElementById("timeTaken").innerText = formatTime(result.timeTaken);

animateCircle(percent);

}


/* FORMAT TIME */

function formatTime(seconds){

const m = Math.floor(seconds/60);

const s = seconds % 60;

if(m === 0) return s + " sec";

return m + " min " + s + " sec";

}


/* ANIMATE SCORE CIRCLE */

function animateCircle(percent){

const circle = document.getElementById("progressBar");

const text = document.getElementById("scorePercent");

const radius = 50;

const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

let current = 0;

const interval = setInterval(()=>{

text.innerText = current + "%";

const offset = circumference - (current/100) * circumference;

circle.style.strokeDashoffset = offset;

current++;

if(current > percent){

clearInterval(interval);

}

},15);

}


/* BUTTONS */

function goDashboard(){

window.location.href = "dashboard.html";

}

function goLeaderboard(){

window.location.href = "leaderboard.html";

}

function logout(){

localStorage.removeItem("loggedInUser");

sessionStorage.removeItem("loggedInUser");

window.location.href = "login.html";

}