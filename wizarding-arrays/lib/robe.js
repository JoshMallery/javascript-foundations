class Robe {
  constructor() {
    this.pockets = new Array(10).fill([]);

  }

  addToPocket(item) {
    for (var i = 0; i < this.pockets.length; i++) {
     this.pockets[i][0] = item
    }
  }

  retrieve(item) {
    this.pockets[0] = [];
    return item
  }

  emptyAllPockets() {
  this.pockets = new Array(10).fill([]);
}


}

module.exports = Robe;
