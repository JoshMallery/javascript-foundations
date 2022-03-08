class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
      this.candies.push(candy);
      this.count += 1;
  }

  contains(candyName) {
    if(candyName === this.candies[0].type) {
      return true;
    }
    return false;
  }

}

module.exports = Bag;
