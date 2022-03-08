var Being = require('../src/being');
var Part = require('../src/part')
class Ship {
  constructor (shipInfo) {
    this.name = shipInfo.name;
    this.type = shipInfo.type;
    this.maxCrew = shipInfo.maxCrew;
    this.odometer = shipInfo.odometer || 0;
    this.fuelCapacity = shipInfo.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = shipInfo.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = shipInfo.parts || {};
    this.readyToFly = false;
  }

  addCrew(crewInfo) {
      for (var i = 0; i < crewInfo.length; i++) {
        if(crewInfo[i] instanceof Being) {
          if(this.crew.length < this.maxCrew) {
            this.crew.push(crewInfo[i]);
          }
        }
      }
    }

    loadCargo(cargoInfo) {
      if(cargoInfo instanceof Part) {
        this.cargo.push(cargoInfo)
      }
    }

    updatePart(component) {
      var diff = 0;

      if (this.parts[component.type]) {
      diff = this.parts[component.type].value
      }

      this.parts[component.type] = component;
      return diff - component.value;
    }

    checkReadiness() {
      if(!this.captain) {
        return `Cannot fly without a captain`
      } else if(!this.fuel) {
        return `Cannot fly without fuel`
      } else if(Object.keys(this.parts).length === 0) {
        return `Cannot fly without parts`
      } else {
        this.readyToFly = true;
        return `Good to go!`
      }
    }
}

module.exports = Ship;
