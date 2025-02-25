var Skier = require('./Skier');

class Lift {
  constructor(peoplePerChair) {
    this.inService = true;
    this.limit = peoplePerChair;
    this.skiers = [];
    this.safetyBar = 'up';

  }

  admitSkier(name, hasLiftTicket) {
    if(!hasLiftTicket) {
      return `Sorry, ${name}. You need a lift ticket!`
    }

    if(this.skiers.length < this.limit) {
      this.skiers.push(new Skier(name,hasLiftTicket));
    }
    return `Sorry, ${name}. Please wait for the next lift!`

  }

  startLift() {
    if(this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else if((this.limit - this.skiers.length) === 1){
      return `We still need ${this.limit - this.skiers.length} more skier!`
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }


}

module.exports = Lift;
