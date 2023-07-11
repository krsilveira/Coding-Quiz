var restartBtn = document.querySelector("button.restartBtn"),
clearBtn = document.querySelector("button.clearBtn"),

/* grab highScore list and turn it to an object */

highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
scoreList = document.getElementById("score-list");

/*Sort hall of fame scoreboard (highScores) from high to low */

highScores.sort(function (a, b) {
return b.score - a.score
})

/* var for scoring display */

for (var s = 0; s < highScores.length; s++) {
var newLi = document.createElement("li")
newLi.textContent = highScores[s].name + " - " + highScores[s].score
scoreList.appendChild(newLi)
}


/* main menu/clear hall of fame */

clearBtn.addEventListener("click", function () {
localStorage.clear();
history.back()
});
restartBtn.addEventListener("click", function () {
history.back();
});