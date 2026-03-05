let user =
JSON.parse(localStorage.getItem("loggedInUser")) ||
JSON.parse(sessionStorage.getItem("loggedInUser"));

let users = JSON.parse(localStorage.getItem("users")) || [];

let currentUser = users.find(u => u.email === user?.email) || {};


// SCORE

let score = currentUser.score || 0;

document.getElementById("scoreValue").innerText = score;

let percent = Math.min(score,100);

document.getElementById("scoreBar").style.width = percent + "%";


// STREAK

document.getElementById("streakValue").innerText =
currentUser.streak || 0;


// ACHIEVEMENTS

let badges=[];

if(score>=5) badges.push("🎯 Beginner");
if(score>=50) badges.push("⚡ Fast Learner");
if(score>=100) badges.push("🏆 Quiz Master");

let badgeContainer=document.getElementById("badges");

badges.forEach(b=>{

let el=document.createElement("div");

el.className="badge";

el.innerText=b;

badgeContainer.appendChild(el);

});


// QUIZ HISTORY

// QUIZ HISTORY

let history = currentUser.history || [];

let list = document.getElementById("history");

list.innerHTML = "";

history.forEach(h=>{

let li=document.createElement("li");

let date=new Date(h.date);

let formatted=date.toLocaleString("en-US",{
month:"short",
day:"numeric",
year:"numeric",
hour:"2-digit",
minute:"2-digit"
});

li.innerText="📅 "+formatted+" • ⭐ Score: "+h.score;

list.appendChild(li);

});
