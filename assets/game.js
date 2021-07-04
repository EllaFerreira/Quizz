let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-text"));
let progressText = document.getElementById("progressText");
let scoreText = document.getElementById("score");
let progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let accepting = true;
let score = 0;
let questionCounter = 0;
let available = [];

let questions = [
  {
    question: "If you type the code 3>2>1===false, what result will you get?",
    choice1: "true",
    choice2: "Null",
    choice3: "undefined",
    choice4: "false",
    answer: "true",
  },
  {
    question: "JavaScript is a _______ -side programming language.",
    choice1: "client",
    choice2: "both",
    choice3: "none",
    choice4: "server",
    answer: "both",
  },
  {
    question:
      "Which of the following will write the message 'Hello DataFlair!' in an alert box?",
    choice1: "alertBox('Hello DataFlair!')",
    choice2: "alert('Hello DataFlair!')",
    choice3: "msgAlert('Hello DataFlair')",
    choice4: "alert(Hello DataFlair)",
    answer: 'alert("Hello DataFlair")',
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    choice1: "min(x,y);",
    choice2: "Math.min(x,y)",
    choice3: "Math.min(xy)",
    choice4: "min(xy);",
    answer: "Math.min(x, y)",
  },
];

let SCORE_POINTS = 100;
let MAX_QUESTIONS = 4;

//GAME //
startGame = () => {
  questionCounter = 0;
  score = 0;
  available = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (available.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  let questionsIndex = Math.floor(Math.random() * available.length);
  currentQuestion = available[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    let number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  available.splice(questionsIndex, 1);
  accepting = true;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!accepting) return;

    accepting = false;
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
startGame();
