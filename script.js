'use strict';

let snumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //no number entered
  if (!guess) {
    displayMessage('NO NUMBER!😟');

    //correct answer
  } else if (guess === snumber) {
    displayMessage('Correct answer🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    //guess not equal to the number
    if (score) {
      displayMessage(guess > snumber ? 'TOO HIGH !!☝' : 'TOO LOW !!👇');

      score--;
      document.querySelector('.score').textContent = score;
      if (!score) {
        document.querySelector('.message').textContent = 'You Lost the Game💥';
      }
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
