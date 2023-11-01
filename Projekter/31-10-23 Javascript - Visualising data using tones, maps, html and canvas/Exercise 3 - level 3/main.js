// This is the array you have to use!
console.log(ufoSightingsLatLng);

const map = L.map('map').setView([56, 10], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

ufoSightingsLatLng.forEach((sighting) => {
    let marker = L.marker([sighting.lat, sighting.lng]).addTo(map);
})

