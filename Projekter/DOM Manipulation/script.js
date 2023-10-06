
// DOM - Document Object Model
// Manipulate Content, Style, and Structure

// Access
const h1Element = document.querySelector("h1")

console.log(h1Element)


// Change Manipulate

h1Element.textContent = "something"

// Create

const liLastElement = document.querySelector(".last-element")
console.log(liLastElement)
liLastElement.insertAdjacentElement("afterend", "<li>Strawberry</li>")

// Event

const button = document.querySelector("button")

button.addEventListener("click", function () {
    console.log("Hej")})


















