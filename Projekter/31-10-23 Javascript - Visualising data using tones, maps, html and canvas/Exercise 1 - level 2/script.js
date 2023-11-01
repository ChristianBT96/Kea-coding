
const body = document.querySelector("body")

const eksports = [
    {
        name: "Pharmaceuticals",
        percent: 15.6,
        emoji: "💊"
    },
    {
        name: "Machinery including computers",
        percent: 13.3,
        emoji: "🖥"
    },
    {
        name: "Electrical machinery, equipment",
        percent: 7.6,
        emoji: "🔌"
    },
    {
        name: "Mineral fuels including oil",
        percent: 4.9,
        emoji: "⛽️"
    },
    {
        name: "Optical, technical, medical apparatus",
        percent: 4.9,
        emoji: "🔬"
    },
    {
        name: "Meat",
        percent: 3.4,
        emoji: "🥩"
    },
    {
        name: "Furniture, bedding, lighting, signs, prefab buildings",
        percent: 3.1,
        emoji: "🛏"
    },
    {
        name: "Vehicles",
        percent: 3,
        emoji: "🚗"
    },
    {
        name: "Fish",
        percent: 2.8,
        emoji: "🐟"
    },
    {
        name: "Palstics, plastic articles",
        percent: 2.5,
        emoji: "🥤"
    }
]

const eksportsLoop = () => {
    eksports.forEach((element) => {
        let createDiv = document.createElement("div")
        let emojiSize = element.percent * 6
        createDiv.style.padding = "20px"
        createDiv.style.fontSize = `${emojiSize}px`
        createDiv.innerHTML = `${element.emoji} ${element.name} ${element.percent}%`
        body.appendChild(createDiv)
    })
}

eksportsLoop()










