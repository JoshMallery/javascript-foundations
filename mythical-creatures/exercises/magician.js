class Magician {
  constructor(magObj) {
    this.name = `The Great ${magObj.name}`,
    this.assistant = magObj.assistant,
    this.favoriteAccessory =  magObj.clothing || 'top hat'  ,
    this.confidencePercentage = 10
  }

  performIncantation(spell){
    return `${spell.toUpperCase()}!`
  }

  performTrick(){
this.confidencePercentage += 10;
    if(this.favoriteAccessory === 'top hat'){
      return 'PULL RABBIT FROM TOP HAT'
    }
    return 'PULL DOVE FROM SLEEVE'
  }

  performShowStopper(){
    if(this.confidencePercentage >= 100 && !!this.assistant){
      return 'WOW! The magician totally just sawed that person in half!'
    }
    return 'Oh no, this trick is not ready!'
  }
}

module.exports = Magician
