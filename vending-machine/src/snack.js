class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.itemsInStock = 0;
  }

  stockItems(numberOfItems) {
    this.itemsInStock += numberOfItems;
  }

  removeItem() {
    if(!this.itemsInStock) {
      return `Sorry, no ${this.name} left in stock!`
    }
    this.itemsInStock--;
    return `Item taken! There are now ${this.itemsInStock} items left.`
  }

}

module.exports = Snack;
