'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
const currentProblem = document.getElementById('current--0');
const answer1 = document.getElementById('answer');
const btnNew = document.querySelector('.btn--new');
/*const mult = document.querySelector('.btn--mult');
const div = document.querySelector('.btn--divide');
const subtraction = document.querySelector('.btn--subtract');*/
const addi = document.querySelector('.btn--add');
const submit = document.querySelector('.submit');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');



let x, y;

player0.classList.add('player--active');
player1.classList.remove('player--active');
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');


let scores = [0, 0];
let activePlayer = 0;
answer1.value = 0;
currentProblem.textContent = 0;
score0.textContent = 0;
score1.textContent = 0;



//btnNew.addEventListener('click', newGame);

function switchPlayer() {

  console.log('player switched');

  document.getElementById(`answer`).value = "";
  //we reset gameboard to zero
  currentProblem.textContent = "";
  //switches from player 1 and 2
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(`${activePlayer}`);
  //then we toogle to see if element is there or not, if it is not present then we apply element
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');

}

function checkWinner() {
  if (scores[activePlayer] >= 20) {
    console.log(`player${activePlayer}  wins`);
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    //newGame();
  } else if (scores[activePlayer] <= 20) {
    // Switch to the next player
    switchPlayer();
  }
}

// a and b show up by the current section
//currentNumb1.textContent = 0;


//currentNumb2.textContent = b;

/*const multiply = a * b;
const divide = a / b;
const add = a + b;
const subtract = a - b;*/

btnOpenModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

const closeX = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeX);
overlay.addEventListener('click', closeX);

/*function addScore() {
  scores[activePlayer] += 10;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
}

//function checkAddiInput() {
// const input = answer1.value;

/*  if (input == x + y) {//make true make a boolean here
    addScore();
  } else {
    console.log("no good");
  }*/
//}

/*submit.addEventListener('click', function () {
 
 
  const input = answer1.value;
  if (input == x + y) {//make true make a boolean here
    addScore();
  } else {
    console.log("no good");
  }
  // checkInput();
  winner();
 
});*/


addi.addEventListener('click', function () {
  x = Math.trunc((Math.random() * 12) + 1);
  y = Math.trunc((Math.random() * 12) + 1);
  currentProblem.textContent = `${x} + ${y}`;
});


submit.addEventListener('click', function () {

  const input = answer1.value;
  if (input == x + y) { //make true make a boolean here
    scores[activePlayer] += 10;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  } else {
    scores[activePlayer] -= 4;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  }
  // checkInput();

  checkWinner();

});

/*
subtraction.addEventListener('click', function () {
  x = generateNumbers();
  y = generateNumbers();
  currentNumb1.textContent = `${x} - ${y}`;

  submit.addEventListener('click', function () {


    const input = answer1.value;
    if (input == x - y) {//make true make a boolean here
      addScore();
      winner();
    } else {
      switchPlayer();
    }


  });
});
*/

