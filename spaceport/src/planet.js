class Planet {
  constructor(details) {
    this.name = details.name;
    this.shop = details.shop;
    this.coordinates = details.coordinates;
  }

  landShip(fighter) {
    this.currentShip = fighter;
  }

  calculateDistance(otherPlanet) {
    var x1 = this.coordinates.x;
    var y1 = this.coordinates.y;
    var z1 = this.coordinates.z;
    var x2 = otherPlanet.coordinates.x;
    var y2 = otherPlanet.coordinates.y;
    var z2 = otherPlanet.coordinates.z;
    var distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2) + ((z2-z1)**2));
    return distance
  }

  refuel(fighter) {
    fighter.fuel = fighter.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    if(!this.currentShip.fuel) {
    return `Clearance denied: Cannot fly without fuel`;
    }
    this.currentShip.fuel = 0;
    otherPlanet.currentShip = this.currentShip;
    this.currentShip = undefined;
    return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
  }
}

module.exports = Planet;
