

// const rules = document.querySelector('.rules');
//
// rules.addEventListener("mouseover", () => {
//
// });











// // // // // // // //



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





