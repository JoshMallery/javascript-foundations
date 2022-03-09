class Potion {
  constructor(potionName, rareness) {
    this.name = potionName;
    this.rareness = rareness || 0;
  }

  isRare() {
    if( this.rareness > 7) {
      return true;
    }
    return false;
  }


}

module.exports = Potion;
