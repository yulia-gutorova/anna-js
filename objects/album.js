// Album class
class Album 
{
    constructor(id, title, artist, genre) 
    {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.songs = [];
    }
    
    addSong(song) 
    {
        this.songs.push(song);
    }

    displayInfo() 
    {
        console.log(`\tAlbum:\n\t\t${this.title}\n\t\tArtist: ${this.artist}\n\t\tGenre: ${this.genre.name}`);
        console.log("\n\t\tSongs:\n");
        this.songs.forEach((song) => 
        {
            console.log(`\t\t- ${song.title}`);
        });
        console.log("\n\t-----");
       
    }
}

module.exports = Album;