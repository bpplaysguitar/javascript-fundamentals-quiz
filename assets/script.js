let startButton = document.getElementById("start-btn");
let timeLeftDisplay = document.getElementById("time-left");
let timeLeft = 75;
let questionContainer = document.getElementById("question-container");
let choiceBtns = document.getElementById("answer-buttons");
let choiceBtn1 = document.getElementById("choice-btn-1");
let choiceBtn2 = document.getElementById("choice-btn-2");
let choiceBtn3 = document.getElementById("choice-btn-3");
let choiceBtn4 = document.getElementById("choice-btn-4");
let welcomeContent = document.querySelector(".welcome-message");
let answerButtons = document.getElementById("answer-buttons");
let welcomeMessage =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
let submitButton = document.getElementById("submit-btn")
let userInitialsEl = document.getElementById("user-initials")
let score = 0;
let scoreForm = document.getElementById("score-form");

document.querySelector(".welcome-message").innerHTML = welcomeMessage;

if (JSON.parse(localStorage.getItem("scoreSet"))=== null) {
  localStorage.setItem("scoreSet", JSON.stringify([]));
}

let highestScore = JSON.parse(localStorage.getItem("scoreSet"));
let questionNumber = 0;


// Questions

let questions = [
  {
    question:
      "String values must be enclosed within _______ when declared as variables.",
    choice1: "parentheses",
    choice2: "quotes",
    choice3: "square brackets",
    choice4: "curly brackets",
    answer: "quotes",
  },

  {
    question: "Commonly used data types DO NOT include _______.",
    choice1: "numbers",
    choice2: "strings",
    choice3: "boolean",
    choice4: "alerts",
    answer:"alerts"
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is _______.",
    choice1: "JavaScript",
    choice2: "console.log",
    choice3: "terminal / bash",
    choice4: "for loops",
    answer:"console.log"
  },

  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: "other arrays",
    choice2: "boolean",
    choice3: "numbers and strings",
    choice4: "all of the above",
    answer:"all of the above"
  },

  {
    question:
      "The condition in an if / else statement is enclosed within _______.",
    choice1: "quotes",
    choice2: "square brackets",
    choice3: "parentheses",
    choice4: "curly brackets",
    answer: "parentheses"
  },
];

//start the countdown timer
function countDown() {
  let interval = setInterval(function () {
    if (timeLeft <= 0) {
      timeLeft = 0;
      gameOver();
      clearInterval(interval);
    }
    if (questionNumber >= 5) {
      clearInterval(interval);
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

// Get question 1
function getQuestion1() {
  question.innerHTML = questions[0].question;
  choiceBtn1.innerHTML = questions[0].choice1;
  choiceBtn2.innerHTML = questions[0].choice2;
  choiceBtn3.innerHTML = questions[0].choice3;
  choiceBtn4.innerHTML = questions[0].choice4;

  // Listen for which button is clicked, and grab text from button

  choiceBtn1.addEventListener("click", wrongAnswer);
  choiceBtn1.addEventListener("click", getQuestion2);
  choiceBtn2.addEventListener("click", rightAnswer);
  choiceBtn2.addEventListener("click", getQuestion2);
  choiceBtn3.addEventListener("click", wrongAnswer);
  choiceBtn3.addEventListener("click", getQuestion2);
  choiceBtn4.addEventListener("click", wrongAnswer);
  choiceBtn4.addEventListener("click", getQuestion2);
}

// Get question 2
function getQuestion2() {
  let btn = document.querySelectorAll(".btn");
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[1].question;
    choiceBtn1.innerHTML = questions[1].choice1;
    choiceBtn2.innerHTML = questions[1].choice2;
    choiceBtn3.innerHTML = questions[1].choice3;
    choiceBtn4.innerHTML = questions[1].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion2);
    choiceBtn2.removeEventListener("click", rightAnswer);
    choiceBtn2.removeEventListener("click", getQuestion2);
    choiceBtn3.removeEventListener("click", wrongAnswer);
    choiceBtn3.removeEventListener("click", getQuestion2);
    choiceBtn4.removeEventListener("click", wrongAnswer);
    choiceBtn4.removeEventListener("click", getQuestion2);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getQuestion3);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getQuestion3);
    choiceBtn3.addEventListener("click", wrongAnswer);
    choiceBtn3.addEventListener("click", getQuestion3);
    choiceBtn4.addEventListener("click", rightAnswer);
    choiceBtn4.addEventListener("click", getQuestion3);
  }, 1000);
}

// Get question 3
function getQuestion3() {
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[2].question;
    choiceBtn1.innerHTML = questions[2].choice1;
    choiceBtn2.innerHTML = questions[2].choice2;
    choiceBtn3.innerHTML = questions[2].choice3;
    choiceBtn4.innerHTML = questions[2].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion3);
    choiceBtn2.removeEventListener("click", wrongAnswer);
    choiceBtn2.removeEventListener("click", getQuestion3);
    choiceBtn3.removeEventListener("click", wrongAnswer);
    choiceBtn3.removeEventListener("click", getQuestion3);
    choiceBtn4.removeEventListener("click", rightAnswer);
    choiceBtn4.removeEventListener("click", getQuestion3);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getQuestion4);
    choiceBtn2.addEventListener("click", rightAnswer);
    choiceBtn2.addEventListener("click", getQuestion4);
    choiceBtn3.addEventListener("click", wrongAnswer);
    choiceBtn3.addEventListener("click", getQuestion4);
    choiceBtn4.addEventListener("click", wrongAnswer);
    choiceBtn4.addEventListener("click", getQuestion4);
  }, 1000);
}

// Get question 4
function getQuestion4() {
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[3].question;
    choiceBtn1.innerHTML = questions[3].choice1;
    choiceBtn2.innerHTML = questions[3].choice2;
    choiceBtn3.innerHTML = questions[3].choice3;
    choiceBtn4.innerHTML = questions[3].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion4);
    choiceBtn2.removeEventListener("click", rightAnswer);
    choiceBtn2.removeEventListener("click", getQuestion4);
    choiceBtn3.removeEventListener("click", wrongAnswer);
    choiceBtn3.removeEventListener("click", getQuestion4);
    choiceBtn4.removeEventListener("click", wrongAnswer);
    choiceBtn4.removeEventListener("click", getQuestion4);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getQuestion5);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getQuestion5);
    choiceBtn3.addEventListener("click", wrongAnswer);
    choiceBtn3.addEventListener("click", getQuestion5);
    choiceBtn4.addEventListener("click", rightAnswer);
    choiceBtn4.addEventListener("click", getQuestion5);
  }, 1000);
}

// Get question 5
function getQuestion5() {
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[4].question;
    choiceBtn1.innerHTML = questions[4].choice1;
    choiceBtn2.innerHTML = questions[4].choice2;
    choiceBtn3.innerHTML = questions[4].choice3;
    choiceBtn4.innerHTML = questions[4].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion5);
    choiceBtn2.removeEventListener("click", wrongAnswer);
    choiceBtn2.removeEventListener("click", getQuestion5);
    choiceBtn3.removeEventListener("click", wrongAnswer);
    choiceBtn3.removeEventListener("click", getQuestion5);
    choiceBtn4.removeEventListener("click", rightAnswer);
    choiceBtn4.removeEventListener("click", getQuestion5);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getResult);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getResult);
    choiceBtn3.addEventListener("click", rightAnswer);
    choiceBtn3.addEventListener("click", getResult);
    choiceBtn4.addEventListener("click", wrongAnswer);
    choiceBtn4.addEventListener("click", getResult);
  }, 1000);
}

function rightAnswer() {
  // console.log("right answer");
  questionContainer.classList.add("correct");
  setTimeout(() => {
    questionContainer.classList.remove("correct");
    questionNumber++;
  }, 1000);
}

function wrongAnswer() {
  // console.log("wrong answer");
  timeLeft -= 10;
  questionContainer.classList.add("incorrect");
  setTimeout(() => {
    questionContainer.classList.remove("incorrect");
    questionNumber++;
  }, 1000);
}

function getResult() {
  score = timeLeft;
  questionContainer.innerText = "Your score = " + score;
  scoreForm.classList.remove("hide");
  timeLeftDisplay.classList.add("hide");
  console.log(score);
}

// Start game
function startGame() {
  startButton.classList.add("hide");
  welcomeContent.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  countDown();
  getQuestion1();
}

gameOverMessage = document.querySelector(".game-over-message")

function gameOver() {
  timeLeft = 0;
  gameOverMessage.classList.remove("hide")
  answerButtons.classList.add("hide")
  questionContainer.classList.add("hide")
  
}

function enterScore(event) {
  event.preventDefault()
  let userInitials = userInitialsEl.value;
  let scoreObject = {
    "initials": userInitials,
    "score": score
  };
  highestScore.push(scoreObject);
  localStorage.setItem("scoreSet", JSON.stringify(highestScore));
  window.location.href = "scores.html";
}

//Start button starts calls startGame
startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", enterScore);

