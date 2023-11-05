

// JSON
// JSON is a file format just like csv, sql or .xls.
// It has some rules that must be respected.
// JSON stands for JavaScript Object Notation.
// It is a lightweight format for storing and transporting data.

// Here are the most important rules:
//     JSON keys require double quotes
//     No trailing commas

// In JSON, values must be one of the following data types:
//      String
//      Number
//      Object (JSON object)
//      Array
//      Boolean
//      null


// JSON.parse()
// JSON.parse() parses a string, written in JSON format, and returns a JavaScript object.

// JSON.stringify()
// JSON.stringify() converts a JavaScript object to a JSON string.

// 📝 Exercise 1
// Imagine you are running a meal ordering website.
// Orders come in from the web we need to store them in a json file.
// Create a json file with two orders that contain at least these things:

const meal1 = {
    "orderName": "John Doe",
    "orderId": 1,
    "price": 100,
    "listOfDrinks": ["Coke", "Fanta", "Sprite"],
    "orderExtras": {
        "ketchup": true
    }
}

const meal2 = {
    "orderName": "Jane Doe",
    "orderId": 2,
    "price": 200,
    "listOfDrinks": ["Coke", "Fanta", "Sprite"],
    "orderExtras": {
        "ketchup": true,
        "mayo": true,
        "mustard": true
    }
}

const meals = [meal1, meal2]
console.log(meals)

// 📝 Exercise 2
//  Fix this JSON

    // [
    // {
    //     name: "Peter",
    //     age: "2"
    // }, {
    //     name: "hans",
    //     age: 3
    // },
    // ]



// FETCH
// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
// It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
// The Fetch API provides an interface for fetching resources (including across the network).

// sends a request to https://yesno.wtf/api/
// fetch('https://yesno.wtf/api/')
//     .then(response => response.json())
//     .then(yesOrNoData => {
//         console.log(yesOrNoData);
//         // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
//     });


// Exercises
// In this exercise we will step by step build a movie database website like IMDB. The movies should be fetched from this api endpoint
// https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json

// 📝 Exercise 1 - level 1
// Fetch the movies and log them out to the console

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log("Exercise 1 - level 1")
        console.log(movies);
    });


// 📝 Exercise 2 - level 1
// Render the following string to the html using the fetched movies array: 6527 movies fetched

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        const h1 = document.createElement('h1');
        h1.innerText = `${movies.length} movies fetched`;
        document.body.appendChild(h1);
    });

// 📝 Exercise 3 - level 1
// Render the first movie in the movies array
// How you do that is up to you. But you could fx just render a string that says
// 71 is a movie from 2014 that is 5940 seconds long. It has a rating of 7.2 out of 41702 votes.

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        console.log("Exercise 3 - level 1 (first movie)")
        console.log(movies[0])

        const movie0Title = movies[0].title
        const movie0Rating = movies[0].rating
        const movie0Year = movies[0].year
        const movie0Duration = movies[0].duration
        const movie0DurationMinutes = parseInt( movie0Duration) / 60
        const movie0Votes = movies[0].votes

        const movie0String = `${movie0Title} is a movie from ${movie0Year} that is ${movie0DurationMinutes} minutes long. It has a rating of ${movie0Rating} out of ${movie0Votes} votes.`

        const h2 = document.createElement('h2');
        h2.innerText = movie0String;
        document.body.appendChild(h2);

        console.log(typeof movie0Duration)
    });


// 📝 Exercise 4 - level 2
// Now render all the movies in a list using ul and li

// fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
//     .then(response => response.json())
//     .then(movies => {
//         console.log("Exercise 4 - level 2 (ul and li)")
//
//         const ul = document.createElement('ul');
//         document.body.appendChild(ul);
//
//         movies.forEach(movie => {
//             const li = document.createElement('li');
//             li.innerText = movie.title;
//             ul.appendChild(li);
//         });
//     });

// 📝 Exercise 5 - level 2
// Create a button with the text Get newer movies. When clicked it should only show movies that came out after 2014.

const NMButton = document.querySelector(".newer-movies")

NMButton.addEventListener("click", () => {
    console.log("Exercise 5 - level 2 (newer movies)")

    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        .then(response => response.json())
        .then(movies => {
            const ul = document.createElement('ul');
            document.body.appendChild(ul);

            movies.forEach(movie => {
                if (movie.year > 2014) {
                    const li = document.createElement('li');
                    li.innerText = movie.title;
                    ul.appendChild(li);
                }
            });

        });
});

// 📝 Exercise 6 - level 3
// Create an input element where people can search for a movie. While the user writes something the movies should be updated!


// 📝 Exercise 7 - level 3
// Create an interface where users can filter the movies in different ways. Fx searching for a movie. Indicating the rating. Only showing movies that are longer or shorter that a specific time.
// Search for inspiration from fx https://www.boliga.dk/


// 📝 Exercise 8
// Make your movie database website pretty 🎉


// 📝 Exercise 9
// Your feature here. What feature would you like to add to the movie datbase?









