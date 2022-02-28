class Snack {
  constructor(item) {
    this.type = item;
    this.deliciousLevel = "extra";
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }

  getEaten() {
    if ( this.amount <= 30 ) {
      this.cuttingItClose = true;
    }

    this.amount -= 10;
  }

  checkForHealthy() {
    if(this.type.includes("fruit") || this.type.includes("Fruit")) {
      return true;
    }

    return false;
  }



}

module.exports = Snack;
