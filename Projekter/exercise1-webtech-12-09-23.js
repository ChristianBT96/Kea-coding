let hej = "hej"
console.log(hej)


let balance = 50000

if (balance > 10000) {
    console.log("I am rich")
} else if (balance < 10000) {
    console.log("I am poor")
}

let mood = true

if (mood === true) {
    document.write("Good job, you're doing great!")
} else if (mood === false) {
    document.write("Every cloud has a silver lining")
} else if (typeof mood === "number") {
    document.write("Beep beep boop")
} else if (typeof mood === "string") {
    document.write("I'm sorry, I'm still learning about feelings!")
}
// Do not use document.write

for (let Q= 3; Q > 0; Q--) {
    console.log("Hello World")
}

for (let i = 1; i<=10; i++) {
    console.log(i)
}

for (let Q = 1; Q<=10; Q++) {
    console.log("*")
}

for (let Q = 5; Q>=-5; Q--) {
    console.log(Q)
}

for (let Q =5;Q<=30; Q+=3) {
    console.log(Q)
}


const randomNumber = Math.floor(Math.random() * 11);

for (let i = 0; i<randomNumber;i++) {
    console.log("#")
}

for (let i=1;i<=10;i++) {
    if(i<=5) {
        console.log(i)
    }else {
    console.log(`${i} is larger than 5`)
}}

for (let i = 1; i<=10;i++) {
    if (i<=3) {
        console.log(`${i} is a small number`)
    } else if (i<=6) {
        console.log(`${i} is a relatively small number`)
    } else if (i<=9) {
        console.log(`${i} is a large number`)
    } else if (i === 10) {
        console.log (`${i} is ten`)
    }
}

let string = "Copenhagen"

for (let i = 0; i<10;i++) {
    console.log(string.charAt(i))
}
console.log("This is the last character")


