'use strict';

// Selecting elements
const player0 = document.querySelector(`.player--0`);

const player1 = document.querySelector(`.player--1`);

const score0Element = document.getElementById('score--0');

const score1Element = document.getElementById('score--1');

const diceElement = document.querySelector('.dice');

let currentScore0Element = document.getElementById('current--0');

let currentScore1Element = document.getElementById('current--1');

// Buttons
const rollBtn = document.querySelector('.btn--roll');

const newBtn = document.querySelector('.btn--new');

const holdBtn = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

function init() {
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');

  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;

  activePlayer = 0;
  currentScore = 0;
  playing = true;

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
}

init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

rollBtn.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice roll
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceElement.src = `dice-${diceNumber}.png`;
    diceElement.classList.remove('hidden');

    // Add dice roll to current score
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    // Add current score of active player
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    diceElement.classList.add('hidden');
    //Check if score is >= 100

    if (scores[activePlayer] >= 50) {
      diceElement.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init{
  /*
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');*/
});
