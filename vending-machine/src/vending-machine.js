class VendingMachine {
  constructor(machineInfo) {
    this.id = machineInfo.id;
    this.isBroken = machineInfo.isBroken;
    this.snacks = [];
  }

  addSnacks(snackToAdd) {
    for (var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].name === snackToAdd.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
      }
    }
      this.snacks.push(snackToAdd);
  }

  purchaseSnack(snackName,price) {
  for (var i = 0; i < this.snacks.length; i++) {
    if(this.snacks[i].name === snackName) {

      if(!this.snacks[i].itemsInStock) {
        return `Sorry, no items in stock. Try another item.`
      }

      if(this.snacks[i].price > price) {
        return `Sorry, not enough payment. Please add more money.`
      }

      this.snacks[i].itemsInStock--;
      return `Success! Here is $${price - this.snacks[i].price} back!`;
      }
    }
  }


}

module.exports = VendingMachine;
