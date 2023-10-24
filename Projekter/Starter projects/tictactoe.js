

// // // // Game Board // // // //

let gameBoard = [0,0,0,0,0,0,0,0,0];

// // // // // // // //


// // // // Input Fields // // // //

// 1. Get the input field
const inputs = document.querySelectorAll('.input');
const playerTurn = document.querySelector('.player-turn');


let playerOneTurn = true;
inputs.forEach((input, index) => {
  input.addEventListener('click', () => {


    if (playerOneTurn) {
      input.innerHTML = 'X';
      playerOneTurn = false;
      playerTurn.innerHTML = "Player 2's turn!";
      gameBoard[index] = 1;
      haveWon()
    } else if (!playerOneTurn) {
      input.innerHTML = 'O';
      playerOneTurn = true;
      playerTurn.innerHTML = "Player 1's turn!";
      gameBoard[index] = -1;
      haveWon()
    }


  })
});




// // // // // // // //


// // // // Win Conditions // // // //

const haveWon = () => {

  let winOneH = gameBoard[0] + gameBoard[1] + gameBoard[2];

  let winTwoH = gameBoard[3] + gameBoard[4] + gameBoard[5];

  let winThreeH = gameBoard[6] + gameBoard[7] + gameBoard[8];

  let winOneL = gameBoard[0] + gameBoard[3] + gameBoard[6];

  let winTwoL = gameBoard[1] + gameBoard[4] + gameBoard[7];

  let winThreeL = gameBoard[2] + gameBoard[5] + gameBoard[8];

  let winOneD = gameBoard[0] + gameBoard[4] + gameBoard[8];

  let winTwoD = gameBoard[2] + gameBoard[4] + gameBoard[6];

    if (winOneH === 3 || winTwoH === 3 || winThreeH === 3 || winOneL === 3 || winTwoL === 3 || winThreeL === 3 || winOneD === 3 || winTwoD === 3) {
        console.log('Player 1 wins!');
    } else if (winOneH === -3 || winTwoH === -3 || winThreeH === -3 || winOneL === -3 || winTwoL === -3 || winThreeL === -3 || winOneD === -3 || winTwoD === -3) {
      console.log('Player 2 wins!');
    }
};

// // // // // // // //



// // // // // // // //



// // // // RULES MODAL // // // //
//  Get the modal
const rulesModal = document.querySelector('.rules-modal');
// Get the button that opens the modal
const rules = document.querySelector('.rules');
// Get the <span> element that closes the modal
const close = document.querySelector('.close');

// When the user clicks on the button, open the modal
rules.addEventListener("click", () => {
  rulesModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
close.addEventListener("click", () => {
  rulesModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === rulesModal) {
    rulesModal.style.display = "none";
  }
});



// // // // DONE // // // //


// // // // INTRO MODAL // // // //

const introModal = document.querySelector('.intro-modal');

const onePlayer = document.querySelector('#one-player');

const twoPlayer = document.querySelector('#two-players');


onePlayer.addEventListener("click", () => {
    introModal.style.display = "none";
});

twoPlayer.addEventListener("click", () => {
    introModal.style.display = "none";
});

// // // // DONE // // // //

