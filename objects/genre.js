// Genre class
class Genre {
  constructor(id, name) {
  this.id = id;
  this.name = name;
  }
  
  displayInfo() {
  console.log(`\t* ${this.name}`);
  }
  }

  module.exports = Genre;