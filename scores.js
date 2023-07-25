//   SCOREBOARD/Highscore script


var restartBtn = document.querySelector("button.restartBtn"),
clearBtn = document.querySelector("button.clearBtn"),


highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
scoreList = document.getElementById("score-list");


/* scoreboard is sorted from highest score to the User's lowest score */

highScores.sort(function (a, b) { return b.score - a.score
})


for (var s = 0; s < highScores.length; s++) { var newLi = document.createElement("li")
newLi.textContent = highScores[s].name + " - " + highScores[s].score
scoreList.appendChild(newLi)
}


/* Clear highs cores*/

// clearBtn will delete all saved/previous recorded high scorea on lists 
clearBtn.addEventListener("click", function () {
localStorage.clear();
history.back()
});
//restartBtn will send the User back to main menu once button is clicked
restartBtn.addEventListener("click", function () {
history.back();
});