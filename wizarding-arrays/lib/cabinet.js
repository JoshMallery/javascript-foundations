class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    if(!this.potions.length) {
    return true
    }
    return false;
  }

  add(potion) {

    if(Array.isArray(potion)) {
      for (var i = 0; i < potion.length; i++) {
        this.potions.push(potion[i])
      }
      return
    }

    if(typeof potion === 'object') {
      return this.potions.push(potion);
    }



  }

  takeFirstPotion() {
    return this.potions.shift();
  }


  takePotionWithName(nameToRemove) {
    for (var i = 0; i < this.potions.length; i++) {
      if(this.potions[i].name === nameToRemove) {
        return this.potions.splice(i,1)[0];
      }
    }
  }

  count(nameToCount) {
    var counter = 0
    for (var i = 0; i < this.potions.length; i++) {
      if(this.potions[i].name === nameToCount) {
        counter++
      }
    }
    return counter
  }


}


module.exports = Cabinet;
