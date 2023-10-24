

// // // // Game Board // // // //

let gameBoardArray = [0,0,0,0,0,0,0,0,0];

// // // // // // // //


// // // // Keep Score // // // //

let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneScoreBoard = document.querySelector('.player-one-score');
const playerTwoScoreBoard = document.querySelector('.player-two-score');

// // // // // // // //


// // // // Win Conditions // // // //

const isThereAWinner = () => {

    let winOneH = gameBoardArray[0] + gameBoardArray[1] + gameBoardArray[2];

    let winTwoH = gameBoardArray[3] + gameBoardArray[4] + gameBoardArray[5];

    let winThreeH = gameBoardArray[6] + gameBoardArray[7] + gameBoardArray[8];

    let winOneL = gameBoardArray[0] + gameBoardArray[3] + gameBoardArray[6];

    let winTwoL = gameBoardArray[1] + gameBoardArray[4] + gameBoardArray[7];

    let winThreeL = gameBoardArray[2] + gameBoardArray[5] + gameBoardArray[8];

    let winOneD = gameBoardArray[0] + gameBoardArray[4] + gameBoardArray[8];

    let winTwoD = gameBoardArray[2] + gameBoardArray[4] + gameBoardArray[6];

    if (winOneH === 3 || winTwoH === 3 || winThreeH === 3 || winOneL === 3 || winTwoL === 3 || winThreeL === 3 || winOneD === 3 || winTwoD === 3) {
        return 1;
    } else if (winOneH === -3 || winTwoH === -3 || winThreeH === -3 || winOneL === -3 || winTwoL === -3 || winThreeL === -3 || winOneD === -3 || winTwoD === -3) {
        return -1;
    }

};

// // // // // // // //


// // // // Input Fields // // // //

// 1. Get the input field
const inputs = document.querySelectorAll('.input');
const playerTurn = document.querySelector('.player-turn');

let playerOneTurn = true;
inputs.forEach((input, index) => {
  input.addEventListener('click', () => {


      if (gameBoardArray[index] !== 0) {
          return;
      }

    if (playerOneTurn) {
        input.innerHTML = "X";
        playerOneTurn = false;
        playerTurn.innerHTML = `${playerTwo.innerHTML}'s turn!`
        gameBoardArray[index] = 1;
    } else if (!playerOneTurn) {
        input.innerHTML = "O";
        playerOneTurn = true;
        playerTurn.innerHTML = `${playerOne.innerHTML}'s turn!`;
        gameBoardArray[index] = -1;
    }

    if (isThereAWinner() === 1) {
        playerOneTurn = true;
        playerOneScore += 1;
        playerOneScoreBoard.innerHTML = playerOneScore;
        inputs.forEach((input) => {
            input.innerHTML = "";
        });
        playerTurn.innerHTML = `${playerOne.innerHTML}'s turn!`;
        gameBoardArray = [0,0,0,0,0,0,0,0,0];
    } else if (isThereAWinner() === -1) {
        playerOneTurn = true;
        playerTwoScore += 1;
        playerTwoScoreBoard.innerHTML = playerTwoScore;
        inputs.forEach((input) => {
            input.innerHTML = "";
        });
        playerTurn.innerHTML = `${playerOne.innerHTML}'s turn!`;
        gameBoardArray = [0,0,0,0,0,0,0,0,0];
    }

  })

});


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
    alert('Only two player mode is available');
    introModal.style.display = "none";
    nameInputModal.style.display = "block";
});

twoPlayer.addEventListener("click", () => {
    introModal.style.display = "none";
    nameInputModal.style.display = "block";
});

// // // // DONE // // // //


// // // // NAME INPUT MODAL AND START BUTTON// // // //

const nameInputModal = document.querySelector('.names-modal');

const playerOneNameInput = document.querySelector('.player-one-name-input');

const playerTwoNameInput = document.querySelector('.player-two-name-input');

const playerOne = document.querySelector('.player-one-name');

const playerTwo = document.querySelector('.player-two-name');

const startButton = document.querySelector('#start');

const playerOneNameTrack = document.querySelector('.player-one-name');
const playerTwoNameTrack = document.querySelector('.player-two-name');
const playerOneScoreTrack = document.querySelector('.player-one-score');
const playerTwoScoreTrack = document.querySelector('.player-two-score');

startButton.addEventListener("click", () => {

    let playerOneName = playerOneNameInput.value;
    let playerTwoName = playerTwoNameInput.value;

    if ((playerOneName === "" || playerOneName === null || playerOneName === undefined) || (playerTwoName === "" || playerTwoName === null || playerTwoName === undefined)) {
        playerOneName = "Player one";
        playerTwoName = "Player two";
    }

    playerOne.innerHTML = `${playerOneName}`;
    playerTwo.innerHTML = `${playerTwoName}`;
    playerTurn.innerHTML = `${playerOneName}'s turn!`;

    playerOneNameTrack.style.display = "block";
    playerTwoNameTrack.style.display = "block";
    playerOneScoreTrack.style.display = "block";
    playerTwoScoreTrack.style.display = "block";

    nameInputModal.style.display = "none";

});

// // // // DONE // // // //


// // // // WINNER MODAL // // // //

// const winnerModal = document.querySelector('.winner-modal');
// const winnerAnnouncement = document.querySelector('.winner-announcement');
//
// const winnerAnnouncementModalText = () => {
//     winnerAnnouncement.style.display = "block";
//     winnerAnnouncement.innerHTML = `Congratulations ${playerOneName} wins!`;
// }


// // // // DONE // // // //


// // // // RESET BUTTON // // // //

const resetButton = document.querySelector('#reset');

resetButton.addEventListener("click", () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneScoreBoard.innerHTML = playerOneScore;
    playerTwoScoreBoard.innerHTML = playerTwoScore;

    inputs.forEach((input) => {
        input.innerHTML = "";
    });

    playerOneTurn = true;
    playerTurn.innerHTML = `${playerOne.innerHTML}'s turn!`;

    gameBoardArray = [0,0,0,0,0,0,0,0,0];

});

// // // // DONE // // // //


// // // // NEW PLAYERS BUTTON // // // //

const newPlayersButton = document.querySelector('#new-players');

newPlayersButton.addEventListener("click", () => {
   nameInputModal.style.display = "block";
});

// // // // DONE // // // //


// // // // NEW PLAYERS BUTTON // // // //


const everything = document.querySelectorAll("*")

everything.style.color = "red";

// // // // DONE // // // //




