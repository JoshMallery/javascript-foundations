class Part {
  constructor(part) {
    this.type = part;
    this.broken = false;
    this.isRepairedAlready = false;
  }

  break(){
    this.broken = true;
  }

  repair() {
    if(this.isRepairedAlready){
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    } else {
    this.broken = false;
    this.isRepairedAlready = true;
    }

  }

}

module.exports = Part;
