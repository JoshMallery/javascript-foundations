class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels =  wagon.wheels || [];
    this.axles =  wagon.axles || [];
    this.oxen =  wagon.oxen || [];
    this.yokes =  wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }

  addPart(part) {
    if(part.type === 'ox') {
      this.oxen.push(part);
    } else if(part.type === 'wheel') {
      this.wheels.push(part)
    } else if(part.type === 'axle') {
      this.axles.push(part)
    } else {
      this.yokes.push(part)
    }
  }

  canTravel() {
    if((this.wheels.length < 4) || (this.wheels[0].broken) || (this.wheels[1].broken) || (this.wheels[2].broken) || (this.wheels[3].broken)) {
      return false;
    } else if((this.axles.length < 2) || (this.axles[0].broken) || (this.axles[1].broken))  {
        return false;
    } else if((this.oxen.length < 2 ) || (this.oxen[0].broken) || (this.oxen[1].broken)) {
      return false;
    } else if((this.yokes.length < 1) || ((this.oxen.length / this.yokes.length) > 2)){
      return false;
    } else if(this.settlers.length < 1 || this.settlers[0].status === 'dead') {
      return false
    } else


    return true
  }

}

module.exports = Wagon;
