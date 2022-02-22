class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(injury) {
    if(this.status === 'dead') {
      return
    }

    this.ailments.push(injury);

    if(this.status === 'healthy'){
      this.status = 'fair';
    } else if(this.status === 'fair') {
      this.status = 'poor';
    } else {
      this.status = 'dead';
    }

  }

  heal() {
    if(this.status === 'dead'){
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
    }

  this.ailments = [];
  this.status = 'healthy';
  }

}

module.exports = Settler;
