//Declare variables
var startBtn = document.querySelector('.start');
var highScoresBtn = document.querySelector('.highscores')
var questionsContainer = document.querySelector('.questions-container')
var resultsContainer = document.querySelector('.score')
var timerContainer = document.querySelector('.timer')
var choicesContainer = document.querySelector('.choices')
var headEl = document.querySelector('h1');
var preGameEl = document.querySelector('.pre-game-info');
var answerBtn = document.querySelector('.answer-choices-btn');
var countDownEl = document.querySelector('.countdown-container');
var scoreFormEl = document.querySelector('form')
var submitBtn = document.querySelector('.submit-button');
var textEntry = document.querySelector('.text-entry')

//Quiz questions object array
var quizQuestions = [
  {
    question: "Where does the script tags go in the HTML code?",
    a: 'main',
    b: 'header',
    c: 'body',
    d: 'footer',
  },
  {
    question: "What does the slice method do?",
    a: 'Modifies the original array',
    b: 'Used to insert or delete elements to/from array',
    c: 'Returns subset of original array',
    d: 'Returns deleted elements as array',
  },
  {
    question: "Which is not a type of scope in JS?",
    a: 'local',
    b: 'global',
    c: 'block',
    d: 'chain',
  },
  {
    question: "What operator should you use when determing the same value and data type?",
    a: '===',
    b: '=',
    c: '==',
    d: '!==',
  },
  {
    question: "Which method is used to convert data from a string to an object?",
    a: '.stringify',
    b: '.parse',
    c: '.reduce',
    d: '.convert',
  },
];
//var currentScore; //later, score will be set to = time left.
var timeLeft;
var currentScore = 75;

//Quiz questions set to not display upon opening the page
questionsContainer.style.display = 'none';
resultsContainer.style.display = 'none';
timerContainer.style.display = 'block';
scoreFormEl.style.display = 'none';

//Set timer function
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
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft}</h2>`;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      finalResults();
    }
  }, 1000);
}

//Functions to generate questions
function firstQuestion() {
  questionsContainer.innerHTML = `
    <h2 class='question'> ${quizQuestions[0].question} </h2> 
    <button id='option-a' class="answer-choice-btn">a. ${quizQuestions[0].a} </button>
    <button id='option-b' class="answer-choice-btn">b. ${quizQuestions[0].b} </button>
    <button id='option-c' class="answer-choice-btn">c. ${quizQuestions[0].c} </button>
    <button id='option-d' class="answer-choice-btn">d. ${quizQuestions[0].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceCBtn.addEventListener('mouseup', function () {
    secondQuestion();
  })
  choiceBBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceABtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceDBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
}

function secondQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[1].question} </h2> 
  <button id='option-a' class="answer-choice-btn">a. ${quizQuestions[1].a} </button>
  <button id='option-b' class="answer-choice-btn">b. ${quizQuestions[1].b} </button>
  <button id='option-c' class="answer-choice-btn">c. ${quizQuestions[1].c} </button>
  <button id='option-d' class="answer-choice-btn">d. ${quizQuestions[1].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');
  
  choiceABtn.addEventListener('mouseup', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceBBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceCBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceDBtn.addEventListener('mouseup', function () {
    thirdQuestion();
  })
}

function thirdQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[2].question} </h2> 
  <button id='option-a' class="answer-choice-btn">a. ${quizQuestions[2].a} </button>
  <button id='option-b' class="answer-choice-btn">b. ${quizQuestions[2].b} </button>
  <button id='option-c' class="answer-choice-btn">c. ${quizQuestions[2].c} </button>
  <button id='option-d' class="answer-choice-btn">d. ${quizQuestions[2].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceABtn.addEventListener('mouseup', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceBBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceCBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceDBtn.addEventListener('mouseup', function () {
    fourthQuestion();
  })
}

function fourthQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[3].question} </h2> 
  <button id='option-a' class="answer-choice-btn">a. ${quizQuestions[3].a} </button>
  <button id='option-b' class="answer-choice-btn">b. ${quizQuestions[3].b} </button>
  <button id='option-c' class="answer-choice-btn">c. ${quizQuestions[3].c} </button>
  <button id='option-d' class="answer-choice-btn">d. ${quizQuestions[3].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');


  choiceBBtn.addEventListener('mouseup', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceCBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceDBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceABtn.addEventListener('mouseup', function () {
    finalQuestion();
  })
}

function finalQuestion() {
  choicesContainer.innerHTML = `<h2>Correct!</h2>`;
  choicesContainer.style.backgroundColor = '#87E0A0';
  questionsContainer.innerHTML = `
  <h2 class='question'> ${quizQuestions[4].question} </h2> 
  <button id='option-a' class="answer-choice-btn">a. ${quizQuestions[4].a} </button>
  <button id='option-b' class="answer-choice-btn">b. ${quizQuestions[4].b} </button>
  <button id='option-c' class="answer-choice-btn">c. ${quizQuestions[4].c} </button>
  <button id='option-d' class="answer-choice-btn">d. ${quizQuestions[4].d} </button>`

  var choiceABtn = document.getElementById('option-a');
  var choiceBBtn = document.getElementById('option-b');
  var choiceCBtn = document.getElementById('option-c');
  var choiceDBtn = document.getElementById('option-d');

  choiceABtn.addEventListener('mouseup', () => {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceCBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceDBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Wrong</h2>`;
    choicesContainer.style.backgroundColor = 'red';
    countDownEl.innerHTML = `<h2>Timer: ${timeLeft} - 6</h2>`;
    currentScore = timeLeft - 5;
    timeLeft = currentScore;
  })
  choiceBBtn.addEventListener('mouseup', function () {
    choicesContainer.innerHTML = `<h2>Correct!</h2>`;
    choicesContainer.style.backgroundColor = '#87E0A0';
    finalResults();
  })
}

function finalResults() {
  //currentScore = timeLeft;
  timerContainer.style.display = 'none';
  choicesContainer.style.display = 'none';
  countDownEl.style.display = 'none';
  resultsContainer.style.display = 'block';
  questionsContainer.style.display = 'none';
  resultsContainer.innerHTML = `
  <div class='score'>
    <h2>Thanks for playing. Your final score is <em>${timeLeft}</em> ! You can submit it below.</h2>
  </div>`;
  scoreFormEl.style.display = 'block';

}

//Event listener to start timer and questions
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', firstQuestion);

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  location.href = './highscores.html'
})

localStorage.setItem('name', textEntry.value)
localStorage.setItem('score', currentScore)