'use strict';

// PROJECT #1: Guess My Number!

// Implementing the Game Logic
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Refactoring Our Code: The DRY Principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { // When there is no input
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

  } else if (guess === secretNumber) {  // When player wins
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('⛔ No Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing HighScores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess !== secretNumber) {  // When guess is wrong
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    // } else if (guess > secretNumber) {    // When guess is too high
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '⏫ Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    // } else if (guess < secretNumber) {    // When guess is too low
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = ;
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

// Coding Challenge #1
/**
Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
 */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});