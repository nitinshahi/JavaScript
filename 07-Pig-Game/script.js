'use strict';

let random;
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const currentScore = document.querySelectorAll('.current-score');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScoreSum = 0;

score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
currentScoreSum = 0;
dice.classList.add('hidden');
const addCurrent = function () {
  currentScoreSum += random;
  if (player0.classList.contains('player--active')) {
    currentScore[0].textContent = currentScoreSum;
  } else if (player1.classList.contains('player--active')) {
    currentScore[1].textContent = currentScoreSum;
  }
};

btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScoreSum = 0;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
});

btnRoll.addEventListener('click', function () {
  random = Math.floor(Math.random() * 6 + 1);
  console.log(random);
  dice.classList.remove('hidden');

  addCurrent();

  if (random === 1) {
    dice.src = 'dice-1.png';
    console.log('1 rolled...');
    currentScoreSum = 0;
    if (player0.classList.contains('player--active')) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      currentScore[0].textContent = 0;
      // score0.textContent = Number(score0.textContent) + currentScoreSum;
    } else if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      currentScore[1].textContent = 0;
      // score1.textContent = Number(score1.textContent) + currentScoreSum;
    }
  }
  if (random === 2) {
    dice.src = 'dice-2.png';
  }
  if (random === 3) {
    dice.src = 'dice-3.png';
  }
  if (random === 4) {
    dice.src = 'dice-4.png';
  }
  if (random === 5) {
    dice.src = 'dice-5.png';
  }
  if (random === 6) {
    dice.src = 'dice-6.png';
  }
});

btnHold.addEventListener('click', function () {
  currentScore.forEach(function (el) {
    el.textContent = 0;
  });
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    score0.textContent = Number(score0.textContent) + currentScoreSum;
    currentScoreSum = 0;
  } else if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    score1.textContent = Number(score1.textContent) + currentScoreSum;
    currentScoreSum = 0;
  }
  if (Number(score0.textContent) >= 20) {
    console.log(`player1 won`);
    player0.classList.add('player--winner');
  } else if (score1.textContent >= 20) {
    console.log(`player2 won`);
    player1.classList.add('player--winner');
  }
});
