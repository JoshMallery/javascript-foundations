class Wizard {
  constructor(wizardInfo) {
    this.name = wizardInfo.name;
    this.pets = [];
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount = this.pets.length;
  }

  petList() {
    return `A ${this.pets[0].type} named ${this.pets[0].name}; An ${this.pets[1].type} named ${this.pets[1].name}.`
  }

  getWand(desiredWand) {
    this.wand = desiredWand;
  }

  castSpell(spellToCast) {
    return `Casting ${spellToCast}!`;
  }

}

module.exports = Wizard;
