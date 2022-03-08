class Part {
  constructor(partInfo) {
    this.name = partInfo.name;
    this.type = partInfo.type;
    this.value = partInfo.value;
    this.broken = false;
    this.isValid = true;
    this.checkForValidity = this.check()
  }
  check() {
    if(!this.name) {
      this.isValid = false;
      return `This part needs a name!`
    } else if(!this.type) {
      this.isValid = false;
      return `This part needs a type!`
    } else if(!this.value) {
      this.isValid = false;
      return `This part needs a value!`
    }

  }

}
module.exports = Part;
