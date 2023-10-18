




// // // // Input Fields // // // //

// 1. Get the input field
const field1 = document.querySelector('#field-1');
const field2 = document.querySelector('#field-2');
const field3 = document.querySelector('#field-3');
const field4 = document.querySelector('#field-4');
const field5 = document.querySelector('#field-5');
const field6 = document.querySelector('#field-6');
const field7 = document.querySelector('#field-7');
const field8 = document.querySelector('#field-8');
const field9 = document.querySelector('#field-9');

field1.addEventListener('click', () => {
    if (field1.innerHTML === "") {
      field1.innerHTML = 'X';
    } else if (field1.innerHTML === "X") {
      field1.innerHTML = 'O';
    } else {
      field1.innerHTML = "";
    }
});

field2.addEventListener('click', () => {
    if (field2.innerHTML === "") {
      field2.innerHTML = 'X';
    } else if (field2.innerHTML === "X") {
      field2.innerHTML = 'O';
    } else {
      field2.innerHTML = "";
    }
});

// // // // // // // //



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
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
// // // // DONE // // // //





