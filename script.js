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
var highScoresBtn = document.querySelector('.highscores')
var questionsContainer = document.querySelector('.questions-container')
var resultsContainer = document.querySelector('.score')
var timerContainer = document.querySelector('.timer')
var choicesContainer = document.querySelector('.choices')
var headEl = document.querySelector('h1');
var preGameEl = document.querySelector('.pre-game-info');
var answerBtn = document.querySelector('.answer-choices-btn');

var currentScore = 100; //later, score will be set to = time left.
var currentQuestion = {};
var timeLeft;
//Quiz questions
var quizQuestions = [
  {
    question: "Where does the script tags go in the HTML code?",
    a: 'main',
    b: 'header',
    c: 'body',
    d: 'footer',
    correct: 'c'
  },
  {
    question: "What does the slice method do?",
    a: 'Modifies the original array',
    b: 'Used to insert or delete elements to/from array',
    c: 'Returns subset of original array',
    d: 'Returns deleted elements as array',
    correct: 'd'
  },
  {
    question: "Which is not a type of scope in JS?",
    a: 'local',
    b: 'global',
    c: 'block',
    d: 'chain',
    correct: 'd',
  },
  {
    question: "What operator should you use when determing the same value and data type?",
    a: '===',
    b: '=',
    c: '==',
    d: '!==',
    correct: 'a'
  },
  {
    question: "Which method is used to convert data from a string to an object?",
    a: '.stringify',
    b: '.parse',
    c: '.reduce',
    d: '.convert',
    correct: 'b'
  },

];

//Function to create quiz questions and answer choices
// function quizGeneration() {

//   var outputQuestions = [];

//   for (var i = 0; i < quizQuestions.length; i++) {
//     // var outputAnswers = [];
//     //   for(var j = 0; j < quizQuestions[i].answers.length; j++) {
//     //     outputAnswers.push(`
//     //     <button class='answer-choices-btn'> ${quizQuestions.answers[j]} </button>`);
//     //   } 
//     outputQuestions.push(`
//         <h2 class='question'> ${quizQuestions[i].question} </h2> 
//         <button id='option-a' class="answer-choice-btn"> ${quizQuestions[i].a} </button>
//         <button id='option-b' class="answer-choice-btn"> ${quizQuestions[i].b} </button>
//         <button id='option-c' class="answer-choice-btn"> ${quizQuestions[i].c} </button>
//         <button id='option-d' class="answer-choice-btn"> ${quizQuestions[i].d} </button>`);
//   }
//   questionsContainer.innerHTML = outputQuestions.join('');

// }

//Quiz questions will not display upon opening the page

//quizGeneration();
questionsContainer.style.display = 'none';
resultsContainer.style.display = 'none';
//Performs when timer is started
function startTimer() {

  //Hides other elements aside from the timer and questions from showing on the screen
  headEl.style.display = 'none';
  preGameEl.style.display = 'none';
  startBtn.style.display = 'none';
  //Displays the questions and choices container
  questionsContainer.style.display = 'block';

  //Setting the timer
  timeLeft = 101;
  var timeInterval = setInterval(function () {
    timeLeft--
    timerContainer.innerHTML = `
    <h2>Timer: ${timeLeft} </h2>`;

    //add a conditional that will subtract 5 pts when user chooses wrong answer
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      currentScore = timeLeft;
      finalResults();
    }
  }, 1000);
}

function firstQuestion() {
  
  questionsContainer.innerHTML = `
    <h2 class='question'> ${quizQuestions[0].question} </h2> 
    <button id='option-a' class="answer-choice-btn"> ${quizQuestions[0].a} </button>
    <button id='option-b' class="answer-choice-btn"> ${quizQuestions[0].b} </button>
    <button id='option-c' class="answer-choice-btn"> ${quizQuestions[0].c} </button>
    <button id='option-d' class="answer-choice-btn"> ${quizQuestions[0].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceCBtn.addEventListener('mousedown', function () {
    secondQuestion();
  })
  choiceBBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceABtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceDBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
}

function secondQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[1].question} </h2> 
  <button id='option-a' class="answer-choice-btn"> ${quizQuestions[1].a} </button>
  <button id='option-b' class="answer-choice-btn"> ${quizQuestions[1].b} </button>
  <button id='option-c' class="answer-choice-btn"> ${quizQuestions[1].c} </button>
  <button id='option-d' class="answer-choice-btn"> ${quizQuestions[1].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');
  
  choiceABtn.addEventListener('click', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceBBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceCBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceDBtn.addEventListener('mousedown', function () {
    thirdQuestion();
  })
}

function thirdQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[2].question} </h2> 
  <button id='option-a' class="answer-choice-btn"> ${quizQuestions[2].a} </button>
  <button id='option-b' class="answer-choice-btn"> ${quizQuestions[2].b} </button>
  <button id='option-c' class="answer-choice-btn"> ${quizQuestions[2].c} </button>
  <button id='option-d' class="answer-choice-btn"> ${quizQuestions[2].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceABtn.addEventListener('click', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceBBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceCBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceDBtn.addEventListener('mousedown', function () {
    fourthQuestion();
  })
}

function fourthQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[3].question} </h2> 
  <button id='option-a' class="answer-choice-btn"> ${quizQuestions[3].a} </button>
  <button id='option-b' class="answer-choice-btn"> ${quizQuestions[3].b} </button>
  <button id='option-c' class="answer-choice-btn"> ${quizQuestions[3].c} </button>
  <button id='option-d' class="answer-choice-btn"> ${quizQuestions[3].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');


  choiceBBtn.addEventListener('click', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceCBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceDBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceABtn.addEventListener('mousedown', function () {
    finalQuestion();
  })
}

function finalQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[4].question} </h2> 
  <button id='option-a' class="answer-choice-btn"> ${quizQuestions[4].a} </button>
  <button id='option-b' class="answer-choice-btn"> ${quizQuestions[4].b} </button>
  <button id='option-c' class="answer-choice-btn"> ${quizQuestions[4].c} </button>
  <button id='option-d' class="answer-choice-btn"> ${quizQuestions[4].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceABtn.addEventListener('click', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceCBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceDBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
  })
  choiceBBtn.addEventListener('mousedown', function () {
    choicesContainer.innerHTML = `<h2>Correct!</h2>`;
    choicesContainer.style.backgroundColor = '#87E0A0';
    finalResults();
  })
}
//firstQuestion()

function finalResults() {
  resultsContainer.style.display = 'block';
  questionsContainer.style.display = 'none';
  resultsContainer.innerHTML = `
  <div class='score'>
    <h2>Thanks for playing! Your final score is ${currentScore}. You can submit it below.</h2>
    <input class='hs-text' type='text'>
    <input class='hs-submit' type='button' value='Submit'>  
  </div>`;

  var highScoreBtn = document.querySelector(".hs-submit")
  highScoreBtn.addEventListener('click', () => {
    location.href('');
  })
}

//function for showing next q - this would be a slide

//Event listener to start timer 
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', firstQuestion);

