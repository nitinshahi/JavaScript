'use strict';

let random;
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const currentScore = document.querySelector('.current-score');
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

btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScoreSum = 0;
  dice.classList.add('hidden');
});

btnRoll.addEventListener('click', function () {
  console.log('clicked.');
  random = Math.floor(Math.random() * 6 + 1);
  console.log(random);
  dice.classList.remove('hidden');

  const addCurrent = function () {
    currentScoreSum += random;
    currentScore.textContent = currentScoreSum;
  };

  if (random === 1) {
    dice.src = 'dice-1.png';
    console.log('1 rolled...');
    if (player0.classList.contains('player--active')) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }
  }
  if (random === 2) {
    dice.src = 'dice-2.png';
    console.log('2 rolled...');
  }
  if (random === 3) {
    dice.src = 'dice-3.png';
    console.log('3 rolled...');
  }
  if (random === 4) {
    dice.src = 'dice-4.png';
    console.log('4 rolled...');
  }
  if (random === 5) {
    dice.src = 'dice-5.png';
    console.log('5 rolled...');
  }
  if (random === 6) {
    dice.src = 'dice-6.png';
    console.log('6 rolled...');
  }
});

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});
