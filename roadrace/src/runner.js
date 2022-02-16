class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = []
  }

  runSomeMiles(mileage) {
    this.milesRun += mileage;
    this.fitness += mileage;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(name, mileage) {
    this.completedRaces.push(name);
    this.runSomeMiles(mileage);
  }

}

module.exports = Runner;
