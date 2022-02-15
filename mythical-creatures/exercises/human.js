class Human {
  constructor(name){
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

noticesOgre() {
  if ((this.encounterCounter / 3) === (1)){
     return true;
   } else if((this.encounterCounter / 3) === (2)){
     return true;
   }
   return false;
}

}

module.exports = Human;
