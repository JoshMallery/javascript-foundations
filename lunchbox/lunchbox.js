class LunchBox {
  constructor(box) {
    this.owner = box.owner;
    this.material = box.madeOf;
    this.shape = box.shape;
    this.color = box.color;
    this.snacks = [];
  }

  acquireSnack(snackItem) {
    snackItem.isInLunchBox = true;
    this.snacks.push(snackItem);
  }

  findHealthySnacks() {
    var hSnacks =[];
    for (var i =0; i < this.snacks.length; i++){
      if(this.snacks[i].checkForHealthy()){
        hSnacks.push(this.snacks[i].type);
      }
    }
    return hSnacks;
  }

}

module.exports = LunchBox;
