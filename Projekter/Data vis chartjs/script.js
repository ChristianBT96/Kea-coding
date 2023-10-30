




const ctx = document.querySelector('#chart').getContext('2d');
// const chart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             data: [12, 19, 3, 5, 2, 3],
//         }]
//     },
//     options: {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Chart - Stacked',
//                 align: "start"
//             },
//             legend: {
//                 display: false,
//             },
//         },
//         onClick: (e, elements) => {
//             if (elements.length) {
//                 const index = elements[0].index;
//                 const label = chart.data.labels[index];
//                 const value = chart.data.datasets[0].data[index];
//                 console.log((`${label}: ${value}`));
//             }
//         },
//     }
//
// });


// 📝 Exercise 1 - level 1

// const chart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: ["2018", "2019", "2020", "2021"],
//         datasets: [{
//             label: "Denmark",
//             data: [1000, 820, 610, 360]
//             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: true,
//             }
//
//         }
//     }
// });

// 📝 Exercise 2 - level 1

// const chart = new Chart(ctx, {
//     type: "bar",
//     data: {
//         labels: ["🇩🇰", "🇸🇪", "🇳🇴", "🇬🇧"],
//         datasets: [{
//             label: "Country Exports",
//             data: [1000, 820, 610, 360],
//             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 display: true,
//             }
//         },
//         aspectRatio: 2,
//         maintainAspectRatio: false,
//     }
// });

// 📝 Exercise 3 - level 1

// const chart = new Chart(ctx, {
//     type: "pie",
//     data: {
//             labels: ["Kayne West Listens", "Taylor Swift Listens"],
//             datasets: [{
//                 data: [55, 45],
//                 backgroundColor: ["#FF6384", "#36A2EB"],
//             }]
//         },
//         options: {
//             plugins: {
//                 legend: {
//                     display: true,
//                 }
//             },
//             aspectRatio: 2,
//             maintainAspectRatio: false,
//         }
// });

// 📝 Exercise 4 - level 1

// const chart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: ["2018", "2019", "2020", "2021"],
//         datasets: [
//             {
//             label: "Denmark",
//             data: [1000, 820, 610, 360],
//             backgroundColor: "red",
//             borderColor: "red",
//             },
//             {
//             label: "Sweden",
//             data: [900, 400, 600, 700],
//             backgroundColor: "blue",
//             borderColor: "blue",
//             },
//         ]
//     },
//     options: {
//             aspectRatio: 2,
//             maintainAspectRatio: false,
//         }
// });

// 📝 Exercise 5 - level 2

const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["DK", "SE", "NO", "GB"],
        datasets: [{
            label: "Country Exports",
            data: [1000, 820, 610, 360],
            backgroundColor: ["red", "lightgrey", "lightgrey", "lightgrey"],
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Custom Chart Title",
                align: "middle",
                font: {
                    size: 10,
                }
            },
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 10,
                    }
                }
            }
        },
        aspectRatio: 2,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50,
            }
        }
    }
});

// 📝 Exercise 6 - level 2





















// class House {
//     constructor(color, price, size, location) {
//         this.color = color;
//         this.price = price;
//         this.size = size;
//         this.location = location;
//     }
// }
//
// const house1 = new House('red', 1000000, 100, 'Copenhagen');
//
// console.log(house1);
//
//
//




















