var timeLeft = 100;
var score = 0;

   window.onload = function startingScreen()
    {
    quiz.style.display = "none";
    gameOver.style.display = "none";
    endGameBtns.style.display = "none";
    startQuiz.style.display = "block"

    }


function start()
{
  questions();
  startTimer();
}

function startTimer(){
var countDown = document.getElementById("time");

startQuiz.style.display = "none";
gameOver.style.display = "none";
endGameBtns.style.display = "none";
quiz.style.display = "block";

countDown = setInterval(function() {
    timeLeft--;
    time.textContent = "Time left: " + timeLeft;

    if(timeLeft == 0) {
      showScore();
      clearInterval(setInterval);
    }
  }, 1000);
}

var quizQuestions = [{
    question: "Commonly used data types DO Not Include:",
    A: "strings",
    B: "booleans",
    C: "alerts",
    D: "numbers",
    answer: "c"},
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

    function showScore(){
        showScore.textContent = "Score: " + score;
    }

    var questionNumber;

    function questions(){
      questionNumber = 0;
      var lastQuestionNumber = quizQuestions.length;
      if (questionNumber === lastQuestionNumber){
          return showScore();
      }
      var currentQuestion = quizQuestions[questionNumber];
      innerHTML = currentQuestion.question;
      buttonA.innerHTML = questionNumber.A;
      buttonB.innerHTML = questionNumber.B;
      buttonC.innerHTML = questionNumber.C;
      buttonD.innerHTML = questionNumber.D;
      questionNumber++;
  }

  function checkAnswer(answer){
    correct = quizQuestions[questionNumber];


    if (answer === correct && questionNumber !== lastQuestionNumber){
      alert("Correct.")  
      score++;
        questionNumber++;
        questions();
    }else if (answer !== correct && questionNumber !== lastQuestionNumber){
        alert("Incorrect.")
        questionNumber++;
        questions();
    }else{
        showScore();
    }
}