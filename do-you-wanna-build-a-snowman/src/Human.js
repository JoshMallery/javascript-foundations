var Snowman = require('./Snowman');
var nsnowmanGlobal;
class Human {
  constructor(name, materials) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  }

  gatherMaterials(item, amount) {
    this.materials[item] += amount;
  }

  buildASnowman() {
    var nsnowman = new Snowman(this.materials);
    nsnowman.canWearMagicHat();
    nsnowmanGlobal = nsnowman1;
    return nsnowmanGlobal;
  }

  placeMagicHat() {
    if(!nsnowmanGlobal.magicHat) {
      return `I guess I didn't build it correctly.`
    }
    return `Woah, this snowman is coming to life!`
  }

}

module.exports = Human;
