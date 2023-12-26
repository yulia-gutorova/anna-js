// RecordLabel class
class RecordLabel 
{
    constructor(id, name, headOfficeAddress) 
    {
        this.id = id;
        this.name = name;
        this.headOfficeAddress = headOfficeAddress;
        this.albums = [];
    }
    
    displayInfo() 
    {
        console.log(`\tRecord Label: ${this.name}\n\tHead Office Address: ${this.headOfficeAddress}`);
        console.log("\tAlbums:");
        this.albums.forEach((album) => 
        {
            console.log(`\t\t- ${album.title}`);
        });
        console.log("\n");
    }
}

    module.exports = RecordLabel;