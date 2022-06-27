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

var button = document.querySelector('button');


//Quiz questions

var quizQuestions = [
  {
    question: "Test 10/2",
    answers: [
      {a: '3', rightOrNot: false},
      {b: '2', rightOrNot: true},
      {c: '12', rightOrNot: false},
      {d: '1', rightOrNot: false,}
    ],
    correct: 'b'
  },
  {
    question: "Test 20/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 30/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 40/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 50/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 60/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 70/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 80/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 90/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
  {
    question: "Test 100/2",
    answers: {
      a: '3',
      b: '10',
      c: '12',
      d: '1',
    },
    correct: 'b'
  }
];

button.addEventListener('click', startQuiz);
