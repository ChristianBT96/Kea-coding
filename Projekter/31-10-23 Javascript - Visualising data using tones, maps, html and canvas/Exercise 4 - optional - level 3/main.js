// console.log(spotifyPlays);





// Find all Eminem songs
const eminemSongs = spotifyPlays.filter((song) => {
    return song.artist === "Eminem";
});
// console.log(eminemSongs);

// Make a top 10 list of Eminem songs
const eminemTopTen =[]

for (let i = 0; i < 10; i++) {
    eminemTopTen.push(eminemSongs[i]);
}

// console.log(eminemTopTen);


// Find the cumulative popularity of all artists
const artistAndPopularity = [];

for (let song of spotifyPlays) {

    let artistName = song.artist;

    const artistAlreadyInArray = artistAndPopularity.find(name => name.artist === artistName);

    if (artistAlreadyInArray) {
        artistAlreadyInArray.popularity += song.popularity;
    } else {
        artistAndPopularity.push({artist: artistName, popularity: song.popularity});
    }
}
console.log(artistAndPopularity);


// Sort the list by popularity
console.log(artistAndPopularity.sort((a, b) => {
    return b.popularity - a.popularity;
}));


