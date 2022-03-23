'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  printMessage('Start guessing...');
  printScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    printMessage('⛔No number!');
  } else if (guess === secretNumber) {
    printMessage('🎉🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      printMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      printScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      printMessage('💥 You lost the game!');
      printScore(0);
    }
  }
});

function printMessage(msg) {
  document.querySelector('.message').textContent = msg;
}
function printScore(score) {
  document.querySelector('.score').textContent = score;
}

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉🥳Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
