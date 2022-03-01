class Snowman {
  constructor(snowmanItems) {
    this.carrots = snowmanItems.carrots;
    this.coal = snowmanItems.coal;
    this.buttons = snowmanItems.buttons;
    this.snowballs = snowmanItems.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    if(this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }

}

module.exports = Snowman;
