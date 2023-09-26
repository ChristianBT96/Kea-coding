

// Exercises A

// 📝 Exercise 1
// Write a function that takes three numbers as parameter, sums the integers and returns the result.
// The function should be defined as an arrow function
// The functions should return the result
// Why does that work?

const sumThreeNumbers = (a,b,c) => a+b+c
console.log(sumThreeNumbers(1,4,5))


// 📝 Exercise 2
// Write a function that takes three numbers as parameter, identifies the largest number and returns the result.
// The function should be defined as an arrow function
// The functions should not return anything (void function) - it should print the result to the HTML page using document.write()

const largestNumber = (a,b,c) => Math.max(a, b, c)

document.write(largestNumber(13,35,22))


// 📝 Exercise 3
// Write a function that receives two parameters. An array of numbers and a number.
// The function will return true if the number is higher than the array average
// The function will return false if the number is lower than the array average
// The function should be defined as an arrow function

const averageChecker = (arrayOfNumbers, number) => {
    let sumOfArray = 0;
    const arrayAverage = sumOfArray / arrayOfNumbers.length

    arrayOfNumbers.forEach(function(number){
        sumOfArray += number
    });

    return arrayAverage < number;

}


const arrayTest = [2,2,2,2]
console.log(averageChecker(arrayTest, 5))


// 📝 Exercise 4 (Optional advanced)
// Write a function that takes an array of numbers as parameter, identifies the largest number and returns the result.
// The function should be defined as an arrow function
// The functions should not return anything (void function) - it should print the result to the HTML page using document.write()

// const getLargestFromArray = array => {
//     let largestOfArray = 0;
//     array.forEach(function(number){
//         if(number > largestOfArray) {
//             largestOfArray += number
//         }
//     })
//     return largestOfArray
// }

const getLargestFromArray = array => {
    document.write(Math.max(...array))
}
const testArray2 = [2,6,19,-4]
getLargestFromArray(testArray2)


// 📝 Exercise 5 (Optional advanced)
// Write a function that accepts a list of country names as input and returns the longest country name.
// The function should be defined as an arrow function
// Sample data :
// ["Australia", "Germany", "United States of America"]

const countryArray = ["Australia", "Germany", "United States of America"]
const longesCountryName = arrayOfCountries => {
    let longestCountry = "";
    arrayOfCountries.forEach((country) => {
        if (country.length > longestCountry.length) {
            longestCountry = country;
        }
    });

    return longestCountry;
}
console.log("The longest named country is " + longesCountryName(countryArray))

// 📝 Exercise 6 (Optional advanced)
// Write a function that accepts a list of country names as input and returns the country with the most amount of words in the name.
// The function should be defined as an arrow function
// Sample data :
// ["Australia", "Germany", "United States of America","Denmark","The United Kingdom of Great Britain and Northern Ireland","Independent and Sovereign Republic of Kiribati	"]
// Expected output : "The United Kingdom of Great Britain and Northern Ireland"





// Exercises B

// 📝Exercise 1
// Write a function that iterates through an array of strings and returns the average amount of letters pr. word
// The function should use the foreach syntax loop

const strings = ["dog","cat","lazy","fox","jumps","over","the","fence","javascript","tobias rahim"]
let lettersTotal = 0;

strings.forEach((string) => {
    lettersTotal += string.length
});

console.log(lettersTotal/strings.length)

// 📝Exercise 2
// Write a function that filters all names above the length of 5 letters.
// The function should use the filter syntax
const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isabel",
    "Jack",
    "Katherine",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Sophia",
    "Thomas",
    "Victoria",
    "William",
];
const filterAboveFive = name => name.length > 5
const firstNamesAboveFive = firstNames.filter(filterAboveFive)
console.log(firstNamesAboveFive)
console.log(firstNames)


// 📝Exercise 3
// Write a function takes an array of numbers as parameter. The function filters away all numbers that are even and returns an array only of uneven numbers
// The function should use the filter syntax

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterUneven = (number) => {
    if (number % 2 === 1) {
        return true
    }
}
console.log(numbers.filter(filterUneven))

// 📝 Exercise 4
// Write a function that converts an array of numbers representing hours to their corresponding amount of seconds.
// The function should use the map syntax

const hours = [2,4,12,1,0.5,3,4,5,10]
const hoursToSeconds = hours.map((hour) => hour * 60 * 60)

console.log(hoursToSeconds)

// 📝Exercise 5 (advanced optional)
// Write a function with two parameters, an array and a letter.
// The function returns an array with all the words starting with the letter put in the function argument

const words = ["apple", "banana", "cherry", "agøøørk","date", "fig", "grape", "kiwi", "lemon", "mango", "orange"];


const filterLetters = (array, letter) => {
    const wordFilter = array => array[0] === letter
    console.log(array.filter(wordFilter))
}
filterLetters(words, "a");

// 📝 Exercise 6 (advanced optional)
// Write a function that takes an array of integers as parameter and filters all unique numbers. The function returns an array with only 1 entry of each unique number.

const numbers6 = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 9, 1, 10, 500];
const numbers7 = [5,8,3,1,1,1,3,0,9,45,32,44,3,3]
const filterUniqueInArray = (array) => {
    let uniqueArray = array.filter((number, index) => {
        return array.indexOf(number) === index;
    })
    console.log(uniqueArray)
};

// Alt way (better?)
const filterArrayUnique = (array) => {
    console.log([... new Set(array)])
}

console.log(numbers6)
filterUniqueInArray(numbers6)
console.log(numbers7)
filterUniqueInArray(numbers7)
filterArrayUnique(numbers6)
filterArrayUnique(numbers7)

// 📝Exercise 7 (advanced optional)
// Write a function that receives an array of cpr numbers.
// The function will filter all cpr numbers that do not follow the following rules of a cpr number:
// It should be 11 characters long
// The first 2 indices cannot be higher than 31
// The next 2 indices cannot be higher than 12
// The next character should be a "-"

const cprNumbersToTest = [
    "121256-7890",
    "987654-3210",
    "1004890123",
    "112233-44552",
    "111244-556611",
    "150690-3152asd",
    "040396-1111"
];

const filterCprNumber = (cprArray) => {
    let realCprNumbers
    const cprRegEx = /^((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]\d{4})$/gm;
    // RegEx found online

    realCprNumbers = cprArray.filter(cpr => cprRegEx.test(cpr));
    console.log(realCprNumbers)
}

filterCprNumber(cprNumbersToTest)


