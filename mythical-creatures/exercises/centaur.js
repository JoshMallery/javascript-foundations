class Centaur {
  constructor(input) {
    this.name = input.name;
    this.breed = input.type;
    this.cranky = false;
    this.standing = true;
    this.crankyCount = 0;
    this.standing = true;
    this.layingDown = false
  }

  shootBow() {
    if(this.crankyCount === 3 || !!this.layingDown){
      return 'NO!';
    }

    if(this.crankyCount === 2) {
      this.cranky = true
      }

    this.crankyCount++;
    return 'Twang!!!';
  }

  run() {
    if(this.crankyCount === 3 || !!this.layingDown){
      return 'NO!';
    }

    if(this.crankyCount >= 2) {
      this.cranky = true
      }
    this.crankyCount++;
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if(!this.layingDown){
       return 'NO!';
    }
    this.cranky = false;
    this.crankyCount = 0;
    return 'ZZZZ'
  }

layDown() {
  this.standing = false;
  this.layingDown = true;
  }

standUp() {
  this.standing = true;
  this.layingDown = false;
  }

drinkPotion() {
  if(!!this.standing) {
  this.cranky = false;
  }
  return 'Not while I\'m laying down!';
  }
  
}

module.exports = Centaur;
