class Craft {
  constructor(inputObj) {
    this.name = inputObj.type;
    this.materials = inputObj.materials
    this.completed = false;
  }

  completeCraft() {
  this.completed = true;
    return `All done! It looks great!`
  }

  calculateProjectTotal() {
    return (this.materials[0].price * this.materials[0].amount) + (this.materials[1].price * this.materials[1].amount);
  }

}

module.exports = Craft;
