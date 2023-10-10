
// // // Click button and credit count/amount // // //

const clickButton = document.querySelector(".main-click");
const creditCount = document.querySelector(".credit-count");
let creditAmount = parseInt(creditCount.textContent, 10);

// Add 1 credit to credit count when button is clicked //
clickButton.addEventListener("click", () => {
    creditAmount += 1;
    creditCount.textContent = creditAmount;
});

//  DONE //



// // //  Unlock upgrades button // // //

const unlockUpgradesButton = document.querySelector(".upgrades-unlock");

// Function to make upgrade button visible when credits are above 30 //
const upgradeButtonUnlock = () => {
    if (creditAmount >= 5) {
        unlockUpgradesButton.style.opacity = 1;
        unlockUpgradesButton.style.cursor = "pointer";
        unlockUpgradesButton.style.pointerEvents = "auto";
    }
}

// Check if credits are above 30 every half a second //
setInterval(upgradeButtonUnlock, 500);

//  DONE //

// // // Upgrade buttons and objects // // //

// Create upgrade objects //
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
            name: "Fuel Extractor",
            price: 100,
            amount: 0,
        },
        {
            name: "Small Generator",
            price: 500,
            amount: 0,
        }]
};

const upgradeDiv = document.querySelector(".upgrades");


unlockUpgradesButton.addEventListener("click", () => {


    if (creditAmount >= 5) {
        const upgradeH2 = document.createElement("h2");
        upgradeH2.textContent = "Upgrades:";
        upgradeDiv.append(upgradeH2)
        unlockUpgradesButton.style.visibility = "hidden";

        upgradeObjects.Upgrades.forEach((upgrade, index) => {

            // Count
            const upgradeCount = document.createElement("p");
            upgradeCount.textContent = "Count: " + upgrade.amount;
            upgradeDiv.append(upgradeCount);
            // Price tag
            const upgradePrice = document.createElement("p");
            upgradePrice.textContent = "Price: " + upgrade.price + " credits";
            upgradeDiv.append(upgradePrice);
            // Button creation
            const upgradeButton = document.createElement("button");
            upgradeButton.style.opacity = "0.5";
            upgradeButton.style.pointerEvents = "none";
            upgradeButton.textContent = upgrade.name;
            upgradeButton.classList.add(`upgrade-button`);
            upgradeDiv.append(upgradeButton);
        });

        creditAmount -= 5;
        creditCount.textContent = creditAmount;


    }
});





//  DONE //

// // // Button listener // // //

// Create button listener //

const getButtons = document.querySelectorAll(".upgrade-button");
const upgradePrice = document.querySelectorAll("p:nth-child(2)");
console.log(upgradePrice);

// const fadeButtons = () => {
//     getButtons.forEach((button) => {
//         if () {
//             button.style.opacity = 1;
//             button.style.pointerEvents = "auto";
//         }
//     });
// };
// setInterval(fadeButtons, 500);

// DONE //



// // //  // // //


//
// upgradeDiv.style.display = "flex";
// upgradeDiv.style.flexDirection = "column";
// upgradeDiv.style.justifyContent = "space-evenly";
// upgradeDiv.style.flexWrap = "wrap";
// upgradeDiv.style.alignItems = "center";










