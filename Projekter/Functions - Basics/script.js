

// Exercise 1
// Create two arrays with the following values: [5,6,3,4,6,34,5,5] [5,5,5,66,7,3,1,1,1,4]
// Concatenate the arrays and sort the concatenated array
// Ensure the array has been sorted by logging the results

sortFunctionAsc = function (a, b) {return a - b}

const array1 = [5,6,3,4,6,34,5,5]
const array2 = [5,5,5,66,7,3,1,1,1,4]

const joinedArray = array1.concat(array2)
console.log(joinedArray)
console.log(joinedArray.sort(sortFunctionAsc))

// Exercise 2
// //Create the initial javascript like this:
// let number = "22";
// let number2 = "22";
// console.log(number + number2);
// //Output: 2222
// Use the parseInt method to parse the two strings to integers, such that we can obtain a result of 44 instead of 2222
let number = "22";
let number2 = "22";

console.log(number + number2);

const addedStrings = parseInt(number) + parseInt(number2)
console.log(addedStrings)

// Exercise 3 (advanced)
// //Create the initial javascript like this:
// participants = ["nicklas;33","benjamin;44","lars;55"]
// Use a loop, the split method and the parseInt method to calculate the total age of all participants

participants = ["nicklas;33","benjamin;44","lars;55"]
let total = 0
for (let i = 0; i < participants.length; i++) {
    const participantsSplit = participants[i].split(";")
    total += parseInt(participantsSplit[1])
}

console.log(`Total age: ${total}`)

let total2 = 0
participants.forEach((participant, i)=> {
    const participantsSplit2 = participants[i].split(";")
    total2 += parseInt(participantsSplit2[1])
})
console.log(total2)

// Exercise B

// Exercise 1
// Create a function that takes a string and then logs that string out
// someFunctionName("hello"); // logs out hello
// someFunctionName("abcde"); // logs out abcde
const logString = function (string) {
    console.log(string)
}
logString("Hello")

// Exercise 1.1
// Create a function that adds two numbers together

const addTwo = function (a,b) {console.log(a + b)}

addTwo(45,30)

// Exercise 2
// Create a function that takes a name and returns true if the first character is the character a otherwise false

const startsWithA = function (name) {
    const nameToLower = name.toLowerCase()
    return nameToLower.charAt(0) === "a"
}

console.log(startsWithA("kea"))
console.log(startsWithA("anna"))
console.log(startsWithA("Anna"))

// Exercise 3
// The following exercises requires you to understand how to convert celcius to fahrenheit and back again.
//     Celsius to Fahrenheit Formula: (°C * 1.8) + 32 = °F
// Fahrenheit to Celsius Formula: (°F - 32) / 1.8 = °C

// Exercise 3A
// Create a function called celciusToFahreneit it should have a parameter called celcius.
//     It should return a string in the following format [CONVERTED_TEMPERATURE] degree fahrenheit fx 23 degree fahrenheit

const celciusToFahrenheit = function (celcius) {
    const celciusToFahrenheitConverted =  (celcius * 1.8) + 32
    return `${celcius} degrees celcius is ${celciusToFahrenheitConverted} degrees in fahrenheit`
}

console.log(celciusToFahrenheit(35))
// Exercise 3B
// Create a second function called fahrenheitToCelcius it should have a parameter called fahrenheit
// It should return a string in the following format [CONVERTED_TEMPERATURE] degree celcius

const fahrenheitToCelcius = function (fahrenheit) {
    const fahrenheitToCelciusConverted =  (fahrenheit - 32) / 1.8
    return `${fahrenheit} degrees fahrenheit is ${fahrenheitToCelciusConverted} degrees in celcius`
}

console.log(fahrenheitToCelcius(100))

// Create a third function called convertTemperature it should have two parameters inputScale and degrees
// If the inputScale argument is equal to "fahrenheit", the function should call the celciusToFahrenheit and log the result
// If the inputScale argument is equal to "celcius", the function should call the FahrenheitToCelcius and log the result
// If the inputscale argument is not equal to either, the function should log invalid input

const convertTemperature = function (inputscale, degrees) {
    let inputscaleToLower = inputscale.toLowerCase()
    if (inputscaleToLower === "fahrenheit") {
        return fahrenheitToCelcius(degrees)
    } else if (inputscaleToLower === "celcius") {
        return celciusToFahrenheit(degrees)
    } else {
        console.log("Invalid input")
    }

}
console.log(convertTemperature("fahrenheit", 95))
console.log(convertTemperature("Fahrenheit", 67))
console.log(convertTemperature("celcius", 23))

// Exercise 4
// Create a function called increaseByHalf that should
// Take a number as an input
// Return this input number increased by half of the input number

const increaseByHalf = function (number) {
    return number * 1.5
}

console.log(increaseByHalf(30))

// Create a function that has two parameters: stringToLog and numberOfTimesToLog
// When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog
// If the numbersOfTimesToLog is longer than the string length, the function should log: Invalid parameters
// Here is an example of the output 👇
// logString('hello', 3);
// // Log output
// // hello
// // hello
// // hello


const printStringNumberOfTimes = function (stringToLog, numberOfTimesToLog) {
    if (stringToLog.length < numberOfTimesToLog) {
        console.log("Invalid parameters")
    } else {
        for (let i = 0; i < numberOfTimesToLog; i++) {
            console.log(stringToLog)
        }
    }
}

printStringNumberOfTimes("Hello", 8)
// Exercise 7 (Advanced - optional)
// Create a function that will return either true or false.
// The function returns true if it receives an argument that is a valid CPR-number.
// The function receives input from the user by using the prompt() function in javascript

// const isItCprNumber = function (cprNumber) {
//     const cprRegExCheck = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[-]?\d{4}$/gm
//     let cprNumberInput = prompt("Please enter CPR-number", "123456-7890")
//     if (cprNumberInput.test(cprRegExCheck))
//
// }

// Exercise 8 (Advanced - optional)
// When working with data we often need to convert data from one format to another therefore:
// Create a function that takes a date in the following format: MONTH/DAY/YEAR fx 10/24/2022. It should return a date in the following format: DAY-MONTH-YEAR fx 24-10-2022
// Hint: research the .split method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const dateConverter = function (date) {
    const dateSplit = date.split("/")
    let newDate = [dateSplit[1], dateSplit[0], dateSplit[2]]
    const realDate = newDate.join("-")
    console.log(realDate)
}

dateConverter("02/11/1996")


// 📝 Exercise 9 (Advanced - optional)
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.
// An example is:
// const clothesToWear = youCreateThisFunctionName(18);
// console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

const whatToWear = (temperature) => {
    let message
    if (temperature <= 10) {
         message = " Wear a some warm clothes.";
    } else if (temperature <= 20) {
         message = " Wear pants and a t-shirt also bring a jacket.";
    } else {
         message = " Wear shorts and a t-shirt, it is hot.";
    }

    return `${temperature} degrees: ${message}`;
}

console.log(whatToWear(15))

// 📝 Exercise 10 (Advanced - optional)
// You specify how many days from today an event is being held. The function then figures out what weekday the event is being held. Here is an example:
// Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

// // With todays weekday a tuesday
// console.log(getEventWeekday(9)); // Logs out "Thursday"
//
// // With todays weekday a Friday
// console.log(getEventWeekday(2)); // Logs out "Sunday"

// You should get the today's day from the system.
// Hint: use remainder operator, array indexes and investigate new Date in js.

// const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const getEventWeekDay = (daysFromNow) => {
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date(); // Gets todays date
    const currentDay = currentDate.getDay(); // gives the day number (monday = 1, tuesday = 2, ...) meaning this will always be a number between 1 and 7
    const weekDayIndex = (currentDay + daysFromNow) % weekDays.length; // If going backwards the result from this can be negative
    const weekDayIndexMadePositive = (weekDayIndex + weekDays.length) % weekDays.length; //This ensures the result is always positive so it works

    // ALT WAY to make the index positive
    // let weekDayIndex = currentDay + daysFromNow;
    // if (weekDayIndex < 0) {
    //     weekDayIndex += weekDays.length;
    // }
    //
    // return weekDays[weekDayIndex % weekDays.length]

    return weekDays[weekDayIndexMadePositive];

};

console.log(getEventWeekDay(1))



