const Genre = require('./genre');
const Artist = require ("./artist")
const Song = require ("./song")
const Album = require ("./album")
const RecordLabel = require ("./recordLabel")
const User = require ("./user")

let allGenres = [];
let allSongs = [];
let allUsers = [];
let allArtists = [];
let allAlbums = [];
let allLabels = [];

//*********************** 
// Create genres
const rockGenre = new Genre(1, "Rock");
const popGenre = new Genre(2, "Pop");
const countryGenre =  new Genre(3, "Country");

allGenres.push(rockGenre);
allGenres.push(popGenre);
allGenres.push(countryGenre);
//*********************** 

//*********************** 
// Create artists
const artist1 = new Artist(1, "Artist 1", rockGenre.name, "Bio for artist 1");
const artist2 = new Artist(2, "Artist 2", popGenre.name, "Bio for artist 2");
const artist3 = new Artist(3, "Taylor Swift ", countryGenre.name, "Taylor Alison Swift is an American singer-songwriter. Her songwriting, artistry, and entrepreneurship have influenced the music industry and popular culture, and her life is a subject of widespread media coverage.");

allArtists.push(artist1);
allArtists.push(artist2);
allArtists.push(artist3);
//*********************** 

//*********************** 
// Create albums
const album1 = new Album(1, "Album 1", artist1.name, rockGenre);
const album2 = new Album(2, "Album 2", artist2.name, popGenre);
const album3 = new Album(2, "Fearless", artist3.name, countryGenre);

allAlbums.push(album1);
allAlbums.push(album2);
allAlbums.push(album3);
//*********************** 

//*********************** 
// Create songs
const song1 = new Song(1, "Song 1");
const song2 = new Song(2, "Song 2");
const song3 = new Song(3, "Song 3");
const song4 = new Song(4, "Song 4");
const song5 = new Song(5, "Fearless");
const song6 = new Song(6, "Love Story");
const song7 = new Song(7, "White Horse");



allSongs.push(song1);
allSongs.push(song2);
allSongs.push(song3);
allSongs.push(song4);
allSongs.push(song5);
allSongs.push(song6);
allSongs.push(song7);

// Add songs to albums
album1.addSong(song1);
album1.addSong(song2);
album2.addSong(song1);
album2.addSong(song3);
album2.addSong(song4);
album3.addSong(song5);
album3.addSong(song6);
album3.addSong(song7);
//*********************** 

//*********************** 
// Create record label
const recordLabel1 = new RecordLabel(1, "Record Label 1", "Head Office Address for Record Label 1");
const recordLabel2 = new RecordLabel(2, "Record Label 2", "Head Office Address for Record Label 2");

allLabels.push(recordLabel1);
allLabels.push(recordLabel2);

// Add albums to record label
recordLabel1.albums.push(album1);
recordLabel1.albums.push(album2);
recordLabel1.albums.push(album3);

//*********************** 

//*********************** 
// Create user
const user1 = new User(1, "User 1");
const user2 = new User(2, "User 2");
const user3 = new User(3, "User 3");

// User plays songs
user1.playSong(song1);
user1.playSong(song3);
user1.playSong(song1);
user1.playSong(song1);
user1.playSong(song1);
user2.playSong(song1);
user3.playSong(song5);

allUsers.push(user1);
allUsers.push(user2);
allUsers.push(user3);
//*********************** 



// Print information
console.log("------------------------------------");
console.log("\nGENRE INFORMATION:\n");

    allGenres.forEach((genre) => 
    {
        genre.displayInfo()
    });
console.log("------------------------------------");


console.log("------------------------------------");
console.log("\nARTISTS INFORMATION:");
    allArtists.forEach((artist) => 
    {
        artist.displayInfo()
    });
console.log("------------------------------------");

console.log("------------------------------------");
console.log("\nSONG INFORMATION:\n");
    allSongs.forEach((song) => 
    {
        song.displayInfo()
    });
console.log("------------------------------------");

console.log("------------------------------------");
console.log("\nALBUM INFORMATION:\n");
    allAlbums.forEach((album) => 
    {
        album.displayInfo()
    });
console.log("------------------------------------");

console.log("------------------------------------");
console.log("\nRECORD LABEL INFORMATION:\n");
    allLabels.forEach((label) => 
    {
        label.displayInfo()
    });
console.log("------------------------------------");

console.log("------------------------------------");
console.log("\nUSER INFORMATION:\n");
    allUsers.forEach((user) => 
    {
        user.displayInfo();
        user.displayPlayedSongs();
    });
console.log("------------------------------------");