
/* questions created for given User */


const questions = [
    {
      title: 'The condition in an if / else statement is enclosed with',
      code: '',
      choices: [
        'square brackets',
         'parenthesis', 
         'curly brackets', 
         'quotes'
        ],
      answer: 'parenthesis'
    },
    
    {
      title: 'Arrays in JS can be used to store what?',
      code: '',
      choices: [
        'booleans', 
        'other arrays',
        'numbers and strings',
        'All of the above'
      ],
      answer: 'All of the above'
    },

    {
      title: 'What are variables used for in JavaScript?',
      code: '',
      choices: [
        'For changing language settings',
        'For storing or holding data',
        'For changing a value\'s data type'
      ],
      answer: 'For storing or holding data'
    },
    {
      title: 'What is the correct way to call a string’s built-in method?',
      code: '',
      choices: [
        "toUpperCase('str')",
        "'str'.toUpperCase()",
        "toUpperCase.'str'()",
        "'str'.toUpperCase"
      ],
      answer: "'str'.toUpperCase()"
    },

    {
      title: "What is string interpolation?",
      code: "",
      choices: [
        "Printing a string to the console",
        "Using template literals to embed variables into strings",
        "Joining multiple strings together using operators like +",
        "Changing the value of a variable"
      ],
      answer: "Using template literals to embed variables into strings"
    },

    {
      title: "What does NaN property stand for?",
      code: "",
      choices: [
        "Not-a-Number",
        "Not-a-Numerical",
        "Null-attribute-Null",
        "Null-aquire-Nun"
      ],
      answer: "Not-a-Number"
    },

    {
      title: "What is string concatenation?",
      code: "",
      choices: [
        "When you print string to the console",
        "When you join strings together",
        "When you assign a string to a variable",
        "When you change a variable's value"
      ],
      answer: "When you join strings together"
    },

    {
      title: "A useful tool during development/debugging for printing content to the debugger is",
      code: "",
      choices: [
        "terminal",
        "console.log()",
        "bash",
        "npm install"
      ],
      answer: "console.log()"
    },

    {
      title: "What will the following code print to the console?",
      code: "let num = 10;\nnum *= 3;\nconsole.log(num);",
      choices: [
        "3",
        "30",
        "'num'",
        "10"
      ],
      answer: "30"
    },

    {
      title: "What is the correct way to declare a new variable that you can change?",
      code: "",
      choices: [
        "let myName = 'Sloan'",
        "myName = 'Sloan'",
        "let myName: 'Sloan'",
        "const myName = 'Sloan'"
      ],
      answer: "let myName = 'Sloan'"
    }
  ]


/* GLOBAL VARIABLES */


var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")

var secondsLeft = (questions.length * 20 + 1);
var timerElement = document.getElementById("timer");
var submitScoreElement = document.querySelector("#submit-score");

var userScoreElement = document.getElementById("user-score");
var userNameInput;

var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var questionNumber = -1;
var answer;




/* Questions are created then appear once the timer has commenced when clicking START QUIZ */

function startTimer() {
 
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // timer begins at 200sc countdown

    setTimer();

    // create question display

    makeQuestions();
}

/* start and stop timer function - timer stops when time runs out or after every question is answered */

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

/* reveal each question one at a time from the questions array in questions.js file. Then, grab the answer choice selected by user to reveal next question */

function makeQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
}



/* Enter name populates after the ;last question is answered */

function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');
    userScoreElement.textContent = "FINAL SCORE: " + secondsLeft + ".";
}

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    window.location.href = './highscores.html'
});



/* Add the Users score to the high scores list*/

function addScore () {
    userNameInput = document.getElementById("userName").value
    
var newScore = {
        name: userNameInput,
        score: secondsLeft
    };



    /* highscore is proceded with the Users included name */

    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback(){
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.style.display='none'
}

function showFeedback(){
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
    var pElement = document.getElementsByClassName("feedback")[0]
    
    if (answer === event.target.textContent) {   
        pElement.innerHTML = "YES!";
        setTimeout(hideFeedback,1225);
        showFeedback();   
        
    } else {
        pElement.innerHTML = "WRONG.";
        setTimeout(hideFeedback,1225);
        secondsLeft = secondsLeft - 20;
        showFeedback();
    }    
    makeQuestions();

});


