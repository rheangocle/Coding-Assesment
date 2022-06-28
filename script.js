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
//need a function for the timer

var startBtn = document.querySelector('.start');
var highScoresBtn = document.querySelector('.highScores')
var questionsContainer = document.querySelector('.questions')
var resultsContainer = document.querySelector('.score')
var timerContainer = document.querySelector('.timer')
var choicesContainer = document.querySelector('.choices')

var currentScore = 100;
var currentQuestion = {};

//Quiz questions

var quizQuestions = [
  // {
  //   question: "Where does the <script> tags go in the HTML code?",
  //   choiceA: 'main',
  //   choiceB: 'header',
  //   choiceC: 'body',
  //   choiceD: 'footer',
  //   correct: 'body'
  // },
  // {
  //   question: "What does the slice method do?",
  //   choiceA: 'Modifies the original array',
  //   choiceB: 'Used to insert or delte elements to/from array',
  //   choiceC: 'Returns subset of original array',
  //   choiceD: 'Returns deleted elements as array',
  //   correct: 'Returns subset of original array'
  // },
  // {
  //   question: "Which is not a type of scope in JS?",
  //   choiceA: 'local',
  //   choiceB: 'global',
  //   choiceC: 'block',
  //   choiceD: 'chain',
  //   correct: 'chain',
  // },
  // {
  //   question: "What operator should you use when determing the same value and data type?",
  //   choiceA: '===',
  //   choiceB: '=',
  //   choiceC: '==',
  //   choiceD: '!==',
  //   correct: '==='
  // },
  {
    question: "Test 50/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
  {
    question: "Test 60/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
  {
    question: "Test 70/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
  {
    question: "Test 80/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
  {
    question: "Test 90/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
  {
    question: "Test 100/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  },
];

function startTimer() {
  var timeLeft = 100;
  varTimeInterval = setInterval(function () {
    timeLeft--
    timerContainer.innerHTML = `
    <h2>Timer: ${timeLeft} </h2>`;

    //add a conditional that will subtract 5 pts when user chooses wrong answer
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      console.log('time up')
      // displayResults();
    }
  }, 1000);
}

function quizGenerator() {
  var questions = '';

  quizQuestions.forEach(function (currentQuestion, questionNumber) {
    var correctAnswers = [];
    for (letter in currentQuestion.correntAnswers) {
      correctAnswers.push(
        `<label>
           <input type='radio' name='questions${questionNumber}' value='${letter}'>
           ${letter} : 
           ${currentQuesttion.correctAnswer[letter]}
         </label>`
      );
    }

    questions.push(
      `<div class='questions'> ${currentQuestion.question} </div>
       <div class='choices'> ${answers.join('')} </div>`
    );
  });
  questionsContainer.innerHTML = questions.join('');
}

startBtn.addEventListener('click', quizGenerator);
//artBtn.addEventListener('click', startQuiz);
//function for showing next q
//function for checking if correct

// function quizGenerator() {
//   var 
// }

//timer
startBtn.addEventListener('click', startTimer);


