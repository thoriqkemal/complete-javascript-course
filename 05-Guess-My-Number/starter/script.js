'use strict';

// PROJECT #1: Guess My Number!
/**
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

// Selecting and Manipulating Elements
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

// Implementing the Game Logic
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { // When there is no input
    document.querySelector('.message').textContent = '⛔ No Number!';

  } else if (guess === secretNumber) {  // When player wins
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // Manipulating CSS Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

  } else if (guess > secretNumber) {    // When guess is too high
    if (score > 0) {
      document.querySelector('.message').textContent = '⏫ Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  } else if (guess < secretNumber) {    // When guess is too low
    if (score > 0) {
      document.querySelector('.message').textContent = '⏬ Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
