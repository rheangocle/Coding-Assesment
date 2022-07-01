var newName = localStorage.getItem('name');
var newHighScore = localStorage.getItem('score';

function renderScore() {
  
  if (newName !== null && newHighScore !== null) {
    document.querySelector('.score').textContent = newName + ' ' + newHighScore
  }
}

renderScore();