class Gear {
  constructor(type,quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    if (this.type ===  'ammunition') {
      return `Great, we\'ll need lots of ${this.type}!`
    } else {
      var invalid = this.type
      this.type = null;
      return `I don\'t think a ${invalid} will help us.`
    }
  }
}

module.exports = Gear;
