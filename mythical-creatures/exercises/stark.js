var Direwolf = require('../exercises/direwolf');

class Stark {
 constructor(stark) {
   this.name = stark.name;
   this.location = stark.area || 'Winterfell';
   this.safe = false;
 }

 sayHouseWords() {
   if(!!this.safe){
     return 'The North Remembers'
   }
   return 'Winter is Coming'
 }

 callDirewolf(direwolfName,area) {
  var direwolf = new Direwolf(direwolfName, area);
   direwolf.home = this.location;
   direwolf.protect(this);
   return direwolf;
 }

}

module.exports = Stark;
