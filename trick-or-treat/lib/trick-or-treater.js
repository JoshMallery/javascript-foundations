class TrickOrTreater {
  constructor(costume,bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies++;
  }

  eat() {
    this.bag.candies.pop();
    this.countCandies--;
  }

}

module.exports = TrickOrTreater;
