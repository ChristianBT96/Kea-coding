

// // // // Game Board // // // //

let gameBoard = [0,0,0,0,0,0,0,0,0]

// // // // // // // //


// // // // Input Fields // // // //

// 1. Get the input field
const inputs = document.querySelectorAll('.input');
const playerTurn = document.querySelector('.player-turn');


let playerOneTurn = true;
inputs.forEach((input) => {
  input.addEventListener('click', () => {


    if (playerOneTurn) {
      input.innerHTML = 'X';
      playerOneTurn = false;
      playerTurn.innerHTML = "Player 2's turn!";
    } else if (!playerOneTurn) {
      input.innerHTML = 'O';
      playerOneTurn = true;
      playerTurn.innerHTML = "Player 1's turn!";
    }
  })
});




// // // // // // // //


// // // // Win Conditions // // // //

const haveWon = () => {

  let winOneH = gameBoard[0] + gameBoard[1] + gameBoard[2];

  let winTwoH = gameBoard[3] + gameBoard[4] + gameBoard[5];

  let winThreeH = gameBoard[6] + gameBoard[7] + gameBoard[8];



};

// // // // // // // //



// // // // // // // //



// // // // MODAL // // // //
//  Get the modal
const modal = document.querySelector('.modal');
// Get the button that opens the modal
const rules = document.querySelector('.rules');
// Get the <span> element that closes the modal
const close = document.querySelector('.close');

// When the user clicks on the button, open the modal
rules.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// // // // DONE // // // //





