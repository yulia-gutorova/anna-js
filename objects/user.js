// PlayingSongs class
class User 
{
    constructor(id, name) 
    {
        this.id = id;
        this.name = name;
        this.playedSongs = [];
    }
    
    playSong(song) 
    {
        song.play();
        this.playedSongs.push(song);
    }
    
    displayInfo() 
    {
        console.log(`\tUser: ${this.name}`);
    }
    
    displayPlayedSongs() 
    {
        console.log("\tPlayed Songs:");
        this.playedSongs.forEach((song) => 
        {
            console.log(`\t\t- ${song.title}`);
        });
        console.log("\n");
    }

}

    module.exports = User;