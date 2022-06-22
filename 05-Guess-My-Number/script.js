'use strict';
// console.log(document.querySelector('.message').textcontent);

// document.querySelector(
//   '.message'
// ).textContent = `you can change this using DOM`;
// document.querySelector('.number').textContent = 55;
// document.querySelector('.label-score').textContent = `score:`;

let answer = Math.floor(Math.random() * 20 + 1);
console.log(typeof answer);
console.log(answer);
let score = 20;
let highscore = 0;

const displayMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  answer = Math.floor(Math.random() * 20 + 1);
  console.log(typeof answer);
  console.log(answer);
  //   document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  //   document.querySelector('.score').textContent = score;
  displayMessage('.number', '?');
  displayMessage('.message', 'start guessing...');
  displayMessage('.score', score);
  document.querySelector('body').style.backgroundColor = 'teal';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log('the number guessed is : ' + guess + ' ' + typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a valid number!!!';
  } else if (score < 1) {
    document.querySelector('.message').textContent = 'You Lost !!!';
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = score;
    if (guess > answer) {
      score--;
      document.querySelector('.message').textContent = ' Guess too high!!!';
    } else if (guess < answer) {
      score--;
      document.querySelector('.message').textContent = ' Guess too low!!!';
    } else if (guess === answer) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent =
        ' You guessed the correct answer!!!';
      if (highscore < score) {
        document.querySelector('.highscore').textContent = score;
      }
    }
  }
});
//   else {
//     document.querySelector('.number').textContent = guess;
//     if (guess === answer) {
//       document.querySelector('.message').textContent =
//         'you guessed the correct answer';
//       if (highscore < score) {
//         highscore = score;
//         // document.querySelector('.score').textContent = score;
//       }
//     } else {
//       if (guess > answer) {
//         document.querySelector('.message').textContent = 'guess is too high!!!';
//       } else
//         document.querySelector('.message').textContent = 'guess is too low!!!';
//       document.querySelector('.score').textContent = score;
//     }
//   }
//   document.querySelector('.highscore').textContent = highscore;
