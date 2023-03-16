var quiz = document.getElementById("quiz");
var start = document.getElementById("start");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var finalScoreEl = document.getElementById("finalScore");
var gameEnd = document.getElementById("gameEnd");
var highScoreContainer = document.getElementById("highScoreContainer");
var displayHighScore = document.getElementById("displayHighScore");
var userInitials = document.getElementById("userInitials");
var highScoreInitials = document.getElementById("highScoreInitials");
var endButtons = document.getElementById("endButtons");
var submitScore = document.getElementById("submitScore");
var highScoreValue = document.getElementById("highScoreValue");

var A = document.getElementById("a");
var B = document.getElementById("b");
var C = document.getElementById("c");
var D = document.getElementById("d");


var questions = [{
    question: "Commonly used data types DO Not Include:",
    A: "strings",
    B: "alerts",
    C: "booleans",
    D: "numbers",
    answer: "b"},
  {
    question: "The condition in an if/else statement is enclosed with____.",
    A: "quotes",
    B: "curly brackets",
    C: "parenthesis",
    D: "square brackets",
    answer: "b"},
   {
    question: "Arrays in JavaScript can be used to store______.",
    A: "numbers and strings",
    B: "other arrays",
    C: "booleans",
    D: "all of the above",
    answer: "d"},
    {
    question: "String values must be enclosed within___ when being assigned to variables.",
    A: "commas",
    B: "curly brackets",
    C: "quotes",
    D: "parenthesis",
    answer: "c"},
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    A: "JavaScript",
    B: "terminal/bash",
    C: "for loops",
    D: "console.log",
    answer: "d"},          
        
    
    ];
var finalQuestion = questions.length;
var currentQuestion = 0;
var timeInterval;
var timeLeft = 100;
var score = 0;
var correct;

function createQuestion(){
    gameEnd.style.display = "none";
    if (currentQuestion === finalQuestion){
        return showScore();
    } 
    questionsEl.innerHTML = questions[currentQuestion].question;
    A.innerHTML = questions[currentQuestion].A;
    B.innerHTML = questions[currentQuestion].B;
    C.innerHTML = questions[currentQuestion].C;
    D.innerHTML = questions[currentQuestion].D;
};

function startQuiz(){
    gameEnd.style.display = "none";
    start.style.display = "none";
    createQuestion();

    timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          showScore();
        }
      }, 1000);
    quiz.style.display = "block";
}

function showScore(){
    quiz.style.display = "none"
    gameEnd.style.display = "flex";
    clearInterval(timeInterval);
    userInitials.value = "";
    finalScoreEl.innerHTML = "Score: " + score + " of " + questions.length;
}


submitScore.addEventListener("click", function highScore(){
    
    
    if(userInitials.value === "") {
        alert("Must Enter Initials");
        return false;
    }else{
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = userInitials.value.trim();
        var currentHighScore = {
            name : currentUser,
            score : score
        };
    
        gameEnd.style.display = "none";
        highScoreContainer.style.display = "flex";
        displayHighScore.style.display = "block";
        endButtons.style.display = "flex";
        
        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighScores));
        highScores();

    }
    
});

function highScores(){
    highScoreInitials.innerHTML = "";
    highScoreValue.innerHTML = "";
    var highScoresSave = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highScoresSave.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highScoresSave[i].name;
        newScore.textContent = highScoresSave[i].score;
        highScoreInitials.appendChild(newName);
        highScoreValue.appendChild(newScore);
    }
}

 
function showHighScore(){
    start.style.display = "none"
    gameEnd.style.display = "none";
    highScoreContainer.style.display = "flex";
    displayHighScore.style.display = "block";
    endButtons.style.display = "flex";

    highScores();
}

function clearScore(){
    window.localStorage.clear();
    highScoreInitials.textContent = "";
    highScoreValue.textContent = "";
}

function replay(){
    highScoreContainer.style.display = "none";
    gameEnd.style.display = "none";
    start.style.display = "flex";
    timeLeft = 100;
    score = 0;
    currentQuestion = 0;
}

 
function checkAnswer(answerCorrect){
    correct = questions[currentQuestion].answer;

    if (answerCorrect === correct && currentQuestion !== finalQuestion){
        score++;
        alert("Correct");
        currentQuestion++;
        createQuestion();
 
    }else if (answerCorrect !== correct && currentQuestion !== finalQuestion){
        alert("Incorrect")
        currentQuestion++;
        timeLeft = timeLeft - 20;
        createQuestion();

    }else{
        showScore();
    }
}


startButton.addEventListener("click",startQuiz);

window.onload = function() {
    gameEnd.style.display = "none";
    highScoreContainer.style.display = "none";
    quiz.style.display = "none";
    };
    