
// Click button and credit count //

const clickButton = document.querySelector(".main-click");
const creditCount = document.querySelector(".credit-count");

// console.log(parseInt(creditCount, 10));

let credits = parseInt(creditCount.textContent, 10);

clickButton.addEventListener("click", () => {
    credits += 1;
    creditCount.textContent = credits;
    upgradeButtonUnlock(credits);
});

//  DONE //



// Unlock upgrades button //

const unlockUpgradesButton = document.querySelector(".upgrades-unlock");

// Function to make upgrade button visible when credits are above 30 //
const upgradeButtonUnlock = (credits) => {
    if (credits >= 30) {
        unlockUpgradesButton.style.opacity = 1;
        unlockUpgradesButton.style.pointerEvents = "auto";
    }
}

//  DONE //

// Upgrade buttons and objects //


unlockUpgradesButton.addEventListener("click", () => {

});


const upgradeObjects = {
    Upgrades:[
        {
            name: "More per. Click",
            price: 10,
            amount: 0,
        },
        {
            name: "Fuel Tank",
            price: 50,
            amount: 0,
        },
        {
            name: "Fuel Generator",
            price: 100,
            amount: 0,
        },
        {
            name: "Small Generator",
            price: 500,
            amount: 0,
        }]
};


// unlockUpgradesButton.addEventListener("click", () => {
//     if (credits >= 40) {
//
//     }
//
//
// });

console.log(upgradeObjects);

// const upgradeButtons = document.querySelectorAll(".upgrade");
// const upgradePrices = document.querySelectorAll(".upgrade-price");
//
// const testButton = document.querySelector(".test");
//
// testButton.addEventListener("click", () => {
//     upgradePrices.forEach((price) => {
//         price.textContent = 50;
//     });
// });
//
//
//
//
// console.log(upgradeButtons);
// console.log(upgradePrices);



















