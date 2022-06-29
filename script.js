// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Display the screen with just the info and 'start quiz' button
//After user clicks to start, they are presented with questions either in order or randomized,
// The timer starts when the user clicks the 'start quiz' button. Timer is also displayed on the screen (top right)\
  //The quiz will end when the timer reaches 0
// Each question will have multiple options
// When the user selects the answer choice, they are told whether it is correct or not. 
//The user is presented with another question everytime they answer a question
    // the answers are saved on the local storage to be presented later
//After user goes through every question, a screen will display showing them how they did 
  //There will be an input to save their info(name) into the high scores
  //After saving, there will be two options, to go back to the beginning or clear high scores. 
//The score is the timer itself, every time the answer is wrong, 10 is substracted. 10 points per question X 10 questions = 100 seconds. Skips to next question if answered

//need a function for generating the quiz questions

var startBtn = document.querySelector('.start');
var highScoresBtn = document.querySelector('.highScores')
var questionsContainer = document.querySelector('.questions')
var resultsContainer = document.querySelector('.score')
var timerContainer = document.querySelector('.timer')
var choicesContainer = document.querySelector('.choices')
var headEl = document.querySelector('h1');
var preGameEl = document.querySelector('.pre-game-info');

var currentScore = 0; //later, score will be set to = time left.
var currentQuestion = 0;

//Quiz questions

var quizQuestions = [
  {
    question: "Where does the <script> tags go in the HTML code?",
    answers: {
      a: 'main',
      b: 'header',
      c: 'body',
      d: 'footer',
    },
    correct: 'c'
  },
  {
    question: "What does the slice method do?",
    answers: {
      a: 'Modifies the original array',
      b: 'Used to insert or delte elements to/from array',
      c: 'Returns subset of original array',
      d: 'Returns deleted elements as array',
    },
    correct: 'd'
  },
  {
    question: "Which is not a type of scope in JS?",
    answers: {
      a: 'local',
      b: 'global',
      c: 'block',
      d: 'chain',
    },
    correct: 'd',
  },
  {
    question: "What operator should you use when determing the same value and data type?",
    answers: {
      a: '===',
      b: '=',
      c: '==',
      d: '!==',
    },
    correct: 'a'
  },
  {
    question: "Which method is used to convert data from a string to an object?",
    answers: {
      a: '.stringify',
      b: '.parse',
      c: '.reduce',
      d: '.convert',
    },
    correct: 'b'
  },
 
];

function quizGeneration() {
  //for each item in the array, I need to get the questions, answer, and correct answer
  //e.stopPropagation();
  for (var i = 0; i < quizQuestions.length; i++) {
    questionsContainer.innerHTML = `<h2 class='questions'> ${quizQuestions[i].question} </h2>`;
    choicesContainer.innerHTML = `
      <button class='answer-choices-btn'> ${quizQuestions[i].answers.a} </button>
      <button class='answer-choices-btn'> ${quizQuestions[i].answers.b} </button>
      <button class='answer-choices-btn'> ${quizQuestions[i].answers.c} </button>
      <button class='answer-choices-btn'> ${quizQuestions[i].answers.d} </button>`;  
            
  } 
//   quizQuestions.forEach(myFunction);
//   function myFunction(item, index) {
//     for (var key in item) {
//       console.log(item[key]);
//       resultsContainer.textContent = item[key];
//     }
//   }  
  /*for every quizQuestions.length
  if quizQuestions[i].answer

  */
}

//calling the function to generate questions and choices
quizGeneration();

function startTimer() {
  //quizGeneration();
  //e.stopPropagation();
  headEl.style.display = 'none';
  preGameEl.style.display = 'none';
  var timeLeft = 100;
  var timeInterval = setInterval(function () {
    timeLeft--
    timerContainer.innerHTML = `
    <h2>Timer: ${timeLeft} </h2>`;
    
    //add a conditional that will subtract 5 pts when user chooses wrong answer
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      finalResults();
      // displayResults();
    }
  }, 100);
}

//function to check if answer is correct
function checkAnswer() {
  /*
  if ( === currentQuestion.correctAnswer) {

  } else {
    timer -= 5;
    display the correct answer maybe also highlight if it is correct or not. 
  }
  */
}

function finalResults() {
  resultsContainer.innerHTML = `
  <h2>Thanks for playing! Your final score is ${score}</h2>`;
}

//artBtn.addEventListener('click', startQuiz);
//function for showing next q - this would be a slide
//function for checking if correct


//Event listener to start timer 
startBtn.addEventListener('click', startTimer);
//startBtn.addEventListener('click', quizGeneration);
//function for slide 