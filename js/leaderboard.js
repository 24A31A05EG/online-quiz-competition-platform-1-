// GET USERS
let users = JSON.parse(localStorage.getItem("users")) || [];

// REMOVE DUPLICATE USERS BY EMAIL
let uniqueUsers = [];

users.forEach(u => {
if(!uniqueUsers.some(x => x.email === u.email)){
uniqueUsers.push(u);
}
});

// SORT BY SCORE
uniqueUsers.sort((a,b)=>(b.score || 0)-(a.score || 0));

const list=document.getElementById("leaderboard-list");

let html="";

// GENERATE LEADERBOARD
uniqueUsers.forEach((player,index)=>{

let rankHTML="";
let rankLabel="";

// TOP 3 MEDALS
rankHTML = `<div class="rank-circle">${index+1}</div>`;
rankLabel = `Rank #${index+1}`;

// TIME FORMAT
let time="Recently";
if(player.lastPlayed){
let diff=Math.floor((Date.now()-player.lastPlayed)/60000);

if(diff<60) time=diff+" minutes ago";
else if(diff<1440) time=Math.floor(diff/60)+" hours ago";
else time=Math.floor(diff/1440)+" days ago";
}

html+=`
<div class="player">

<div class="rank">

${rankHTML}

<div class="rank-text">
<b>${rankLabel}</b>
</div>

</div>

<div class="user">

<div class="avatar">👤</div>

<div>
<b>${player.username}</b>
<br>
<small>Quiz Master</small>
</div>

</div>

<div class="points">

<div class="points-circle">⭐</div>

<div>
<b>${player.score || 0}</b>
<br>
<small>points</small>
</div>

</div>

<div class="time">
⏱ ${time}
</div>

</div>
`;

});

list.innerHTML=html;


// TOTAL PLAYERS
document.getElementById("totalPlayers").innerText=uniqueUsers.length;


// TOP SCORE
let scores=uniqueUsers.map(u=>u.score||0);
document.getElementById("topScore").innerText=scores.length?Math.max(...scores):0;


// USER RANK
let loggedUser=JSON.parse(localStorage.getItem("loggedInUser")) ||
JSON.parse(sessionStorage.getItem("loggedInUser"));

let rank=uniqueUsers.findIndex(u=>u.email===loggedUser?.email);

document.getElementById("yourRank").innerText=rank>=0?"#"+(rank+1):"Not ranked";
