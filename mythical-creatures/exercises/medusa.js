var Person = require('./person');
var Statue = require('./statue');

class Medusa {
constructor(name){
this.name = name,
this.statues = []
  }

  gazeAtVictim(victim) {
if(this.statues.length < 3){
    this.statues.push(new Statue(victim.name))
  } else if (this.statues.length === 3){
    this.statues.push(new Statue(victim.name));
    
   var person = new Person(this.statues[0].name);
    person.mood = 'relieved';
    this.statues.shift();
  }
  return person
}

}


module.exports = Medusa
