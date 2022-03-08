var Part = require('../src/part');
class Shop {
  constructor(shopDetails) {
    this.name = shopDetails.name;
    this.inventory = {};
  }

  addInventory(item) {
    if(item instanceof Part) {
    this.inventory[item.type] = item;
    }
  }

  outfitShip(ship,part){
    if(!ship.captain) {
      return `cannot outfit a ship without a captain`
    }

    var shortage = this.inventory[part].value
    var capCredits = ship.captain.credits

    if (capCredits < shortage) {
      var diff = shortage - capCredits;
      return `you require ${diff} more credits to make this purchase`
    } else {
      ship.captain.credits -= shortage;
      ship.parts[part] = this.inventory[part]
      this.inventory[part] = undefined;
      return `${part} added to ship`
    }
  }

}

module.exports = Shop;
