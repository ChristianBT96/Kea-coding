

// object = {key:value}
// key:value = key:value pair

// 📝 Exercise 1 - level 1
// The objects below have some syntax issues - try and fix them all!

const kitten = {
    fur_colour: "orange",
    age: "23"
};

const laptop = {
    brand: "Lenovo",
    ram: "5GB"
};

const phone = {
    operating_system: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours"
};

// 📝 Exercise 2 - level 1
// Create an object that describes you. Fx a key called age with the object of 28



// 📝 Exercise 3 - level 1
// Log the objects of each property of kitten
// console.log the objects of each property of "kitten"
let kitten2 = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};

for(let property in kitten2) {
    console.log(property + ": " + kitten2[property])
}

console.log(kitten2)
// console.log(kitten2.ageMonths)
// console.log(kitten2.isFemale)
// console.log(kitten2.furColour)
// console.log(kitten2["ageMonths"])
// console.log(kitten2["isFemale"])
// console.log(kitten2["furColour"])
// Can use "object.key" method or "object["key"]" bracket notation can be used to access a key with a space in it


// 📝 Exercise 4 - level 1
// Write code in the space provided so that the expected objects output
// // // BEFORE
// const dog = {
//     name: "Billy",
//     wantsToPlay: false,
// };
//
// // WRITE CODE BELOW THIS LINE
// // WRITE CODE ABOVE THIS LINE
//
// console.log(dog.name);
// console.log(dog.wantsToPlay);
//
// // -> it should output:
// // Rex
// // true
// // // AFTER
const dog = {
    name: "Rex",
    wantsToPlay: true,
};
console.log(dog.name);
console.log(dog.wantsToPlay);

// 📝 Exercise 5 - level 2
// The following object represents all the people that are in space right now.
// Data is taken from "http://api.open-notify.org/astros.json"

const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
}

// NOTES FOR "for...in" LOOP
// astronautsInSpace.people.forEach(person => {                            // "person"     = object within the astronautsInSpace.people array
//     let isOnISS = false;
//
//     for (let astronaut in person) {                                     // "astronaut"  = holds the values of each person object while it iterates
//         if (person.craft === "ISS") {
//             isOnISS = true;
//             console.log(astronaut + ": " + person[astronaut]);
//         }
//     }
//
//     if (!isOnISS) {                                                     // if (!isOnISS) = if it is false (same as if (isOnISS === false)
//         console.log("Not on the ISS");
//     }
//
// });


// Using the astronautsInSpace variable log out the following things

// The number of astronauts in space right now
// console.log(astronautsInSpace.people) // All the people objects
// console.log(astronautsInSpace.people.length) // Amount of people in space (length of array)

// The name of the craft of the last person in the array
// console.log(astronautsInSpace.people[9]) // Array length is 10 = last person is at index 9
// console.log(astronautsInSpace.people[9].craft) // The craft part of the object

// The lastname of the first astronaut in the ISS
// // // First way to do it
// const lastOnISS = (astronautsInSpace.people[6].name).split(" ")
// console.log(lastOnISS[1])

// // // Second way to do it
// const lastOnISS = (astronautsInSpace.people[0].name)
// const lastNameOfLastOnISS = lastOnISS.split(" ")
// console.log(lastNameOfLastOnISS[1])

// // // Third way to do it
// const issAstronauts = astronautsInSpace.people.filter(astronaut => astronaut.craft === "ISS"); // Finds all the astronauts on the ISS
//
// if (issAstronauts.length > 0) { //To see if there even are anyone on the ISS in this array
//     const firstAstronaut = issAstronauts[0];
//
//     const astronautFullName = firstAstronaut.name.split(" ")
//
//     const astronautLastName = astronautFullName[1];
//
//     console.log(`The last name of the first astronaut on the ISS is: ${astronautLastName}`)
// } else {
//     console.log("There are no astronauts in this array that are on the ISS")
// }

// 📝 Exercise 6 - Lets analyze this code in class
// What does it do?
// How should we improve it?
// DONE IN CLASS

// // // 📝 Exercise 7 - Please improve the following code // // //
// ORIGINAL CODE HERE:
// function ChkPass(user_data) {
//     if(user_data) data = JSON.parse(user_data);
//     usr = data['user'];
//     pw = data['password'];
//     if(usr.length > 0 && pw.length > 0) {
//         status = 'valid';
//     }
//     else {
//         status = 'invalid';
//     }
//     alert('Status: ' + status);
// }
//
// ChkPass('{"user": "test", "password": "1234"}');
// // // IMPROVED CODE HERE: // // //
let testUser = '{"user": "test", "password": "1234"}';
const checkIfUserIsValid = (userData) => {

    const parsedUser = JSON.parse(userData)
    const userDataParsedUser = parsedUser.user
    const userDataParsedPassword = parsedUser.password

    if (userDataParsedUser.length > 0 && userDataParsedPassword.length > 0) {
        alert("valid")
    } else {
        alert("invalid")
    }
}

// checkIfUserIsValid(testUser)


// // // 📝 Hand-in - Individual // // //
// 1 - What to wear
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.
// An example is:
// const clothesToWear = youCreateThisFunctionName(18);
// console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

// // // SEE FUNCTIONS BASIC EXERCISE 9 // // //

// // // 2 - Dice game 🎲 // // //
// Write a function that simulates a die roll. You call the function with the number of times you would like to roll the die.
// Every time the dice hits a 6 log out You just hit 6!

const generateRandomNumber = (min, max) => {                  //
    return Math.floor((Math.random() * (max - min + 1)) + min)      // Generates random number between and including min and max: Math.random() * (max - min + 1)) + min)
}

// const dieRoller = (timesThrow) => {
//
//     let dieResult = [];
//     for (let i = 0; i < timesThrow; i++) {
//         dieResult.push(generateRandomNumber(1,6));
//     }
//
//     dieResult.forEach((result) => {
//         if (result === 6)
//             console.log("You just hit 6!")
//     })
// }
//
// dieRoller(2)

// // // Part 2 // // //
// If the user hits 6 in every roll the log-out Jackpot 🎉

const dieRollerWithJackpot = (timesThrow) => {

    let dieResult = [];
    for (let i = 0; i < timesThrow; i++) {
        dieResult.push(generateRandomNumber(1,6));
    }

    const onlySix = [...new Set(dieResult)].sort();
    if (onlySix[0] === 6) {
        console.log("Jackpot");
    } else {
        dieResult.forEach((result) => {
            if (result === 6) {
                console.log(`You just hit 6!`);
            }
        });
    }
};

dieRollerWithJackpot(2)

// // // 3 - Build a sentiment analyzer // // //
// A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
// Fx the sentence "I am mega super awesome happy" Should have a high score The sentence "I hate doing boring stuff" should have a low score".
// Create a function that takes a string as a parameter.
// Calling the function will return an object with score, positiveWords and negativeWords.
// You decide how the score should be implemented and what words are negative and positive.
// Here is an example of using the function:
// const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
//
// console.log(sentimentScoreObject);
// /*
// {
//   score: 3,
//   positiveWords: ['happy', 'awesome', 'super'],
//   negativeWords: [],
// }
// */

const goodWords= ["happy", "nice", "great", "wonderful"];
const badWords= ["bad", "shitty", "boring"];

const sentimentAnalyser = (string) => {

    let score = 0;
    let positiveWordsFound = [];
    let negativeWordsFound = [];

    for (let word of goodWords) {
        if (string.toLowerCase().includes(word)) {
            score += 1;
            positiveWordsFound.push(word);
        }
    }
    for (let word of badWords) {
        if (string.toLowerCase().includes(word)) {
            score -= 1;
            negativeWordsFound.push(word);
        }
    }

    let result = {
        score: score,
        positiveWords: positiveWordsFound,
        negativeWords: negativeWordsFound
    }
    console.log(result)
}
// You can also choose not keep track of the score (done here with incrementing and decrementing the score variable).
// But instead just take the length of the positive array and subtract the negative array:
// positiveWordsFound.length - negativeWordsFound.length

const testSentenceGood = "I am so happy to be part of this great class of wonderful people";
const testSentenceBad = "I hate my shitty job, it is bad and boring";
const testSentenceNeutral = "I guess my work is not so bad, I have wonderful coworkers";

sentimentAnalyser(testSentenceGood)
sentimentAnalyser(testSentenceBad)
sentimentAnalyser(testSentenceNeutral)

// // // ALT SOLUTION USING FILTER // // //
const sentimentAnalyser2 = (string) => {

    const stringLowerCaseAndSplit = string.toLowerCase().split(" ")

    const positiveWordsFound = stringLowerCaseAndSplit.filter((word) =>
        goodWords.includes(word)
    );
    // ".filter" is an array method that creates a new array with all elements that pass a certain test.
    // It takes a callback function as an argument, and this function is applied to each element in the array.
    // In this case the callback function is the arrow function which checks if the word (element) exists in the goodWords array.
    // If it does, it returns true and the word is kept in the new array, if false it is not included.
    const negativeWordsFound = stringLowerCaseAndSplit.filter((word) =>
        badWords.includes(word)
    );

    const score = positiveWordsFound.length - negativeWordsFound.length;

    const result = {
        score: score,
        positiveWords: positiveWordsFound,
        negativeWords: negativeWordsFound
    };

    console.log(result)
}

// // // 4 - Credit card number formatter - optional // // //
// This is a very real world example of a problem i got at my previous work.
// I was tasked to implement one of the smart credit card input fields, where the credit card numbers are seperated with a space.
// Fx inputting 123456789 would show 1234 5678 9.
// Create a function that takes a number as parameter. The function should return the following object:
// const formattedCreditCardObject = formatCreditCardNumber(123456789);
// console.log(formattedCreditCardObject);
// /*
// {
//   original: 123456789,
//   formatted: "1234 5678 9",
// }
// */
// Things to consider:
// What should happen if the function is called with an argument that is not a number?
















