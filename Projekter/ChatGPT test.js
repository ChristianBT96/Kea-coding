
// 1.

let myArray = [];

// 2.

myArray.push(2, "hello", true)

// 3.

console.log(myArray[1])

// 4.

console.log(myArray.length)

// 5.

myArray.push(4)

myArray = myArray.slice(1)

// 6.

const myArray2 = [1,2,3,4,5]

myArray2.forEach(number => {
    console.log(number)
})

// 7.

const myWordArray = ["Hello", "Monster", "Bottle", "Free"]

myWordArray.forEach(word => {
    console.log(word.length)
})

// 8.

const arraySearchFunction = array => {
    array.forEach((number, index) => {
        if (number % 2 === 0) {
            console.log(index);
        } else {
            console.log(-1);
        }
    })
}

arraySearchFunction(myArray2)

// 9.

const randomArray = [2,5,7,3,1,98,34,21,23,56,76]

console.log(randomArray.sort((a,b) =>  a - b))

// 10.

const randomNumberArray1= [4,2,1,6,7]
const randomNumberArray2= [5,9,1,8,7]

const sortedArrays = [... new Set(randomNumberArray1.concat(randomNumberArray2))].sort((a,b) =>  b - a)

console.log(sortedArrays)