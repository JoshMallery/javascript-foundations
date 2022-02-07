class Dragon {
  constructor(name,rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hungerCount = 0
  }
greet(){
  return `Hi, ${this.rider}!`
}

eat(){
  this.hungerCount += +1
  if(this.hungerCount === 3 ){
    this.hungry = false

  }
}
}

module.exports = Dragon;
