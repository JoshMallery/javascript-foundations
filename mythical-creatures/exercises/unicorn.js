class Unicorn {
  //color: 'white',
  constructor(name, color) {

    this.name = name;
    //this.color = 'white';
    this.color = color;
    if(this.color === undefined){
      this.color = 'white'
    }
  }

  isWhite(){
    if (this.color === 'white'){
      return true
    } else {
      return false
    }
  }

  says(text){
    return `**;* ${text} *;**`
  }
}

module.exports = Unicorn;
