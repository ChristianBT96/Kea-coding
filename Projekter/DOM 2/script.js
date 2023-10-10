
const clickButton = document.querySelector(".main-click");
const creditCount = document.querySelector(".credit-count");



let credits = 0;

clickButton.addEventListener("click", () => {
    credits += 1;
    creditCount.textContent = credits;
});

const upgradeButtons = document.querySelectorAll(".upgrade");






















