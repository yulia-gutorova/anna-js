// Song class
class Song 
{
    constructor(id, title) 
    {
    this.id = id;
    this.title = title;
    this.playCount = 0;
    }
    
    play() 
    {
        this.playCount++;
    }
    
    getPlayCount() 
    {
        return this.playCount;
    }
    
    displayInfo() 
    {
        console.log(`\tTitle: ${this.title}\n\tPlay Count: ${this.playCount}\n`);
    }
}

    module.exports = Song;