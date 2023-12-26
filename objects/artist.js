class Artist {
  constructor(id, name, genre, bio) {
  this.id = id;
  this.name = name;
  this.genre = genre;
  this.bio = bio;
  }
  
  displayInfo() {
  console.log(`\n\tArtist: ${this.name}\n\tGenre: \t${this.genre}\n\tBio: \t${this.bio}`);
  }
  }

  module.exports = Artist;