// This class represents the individual scooters that users will rent from stations.
class Scooter {
  constructor(station, user) {
    // station: populated by the argument of station
    this._station = station
    // user: populated by the argument of user
    this._user = user
    this._serial = Math.floor(Math.random() * 1000 + 1)
    this._charge = Math.floor(Math.random() * 100 + 1)
    this._isBroken = false
    this._docked = true
  }

  get station() {
    return this._station
  }

  set station(newStation) {
    this._station = newStation
  }

  get user() {
    return this._user
  }

  set user(newUser) {
    this._user = newUser
  }

  get serial() {
    return this._serial
  }

  set serial(newSerial) {
    this._serial = newSerial
  }

  get charge() {
    return this._charge
  }

  set charge(newCharge) {
    this._charge = newCharge
  }

  get isBroken() {
    return this._isBroken
  }

  set isBroken(newIsBroken) {
    this._isBroken = newIsBroken
  }

  get docked() {
    return this._docked
  }

  set docked(newDocked) {
    this._docked = newDocked
  }

  rent() {
    // If isBroken is set to false, and charge is > 20, then set docked to false, and log to the console, “Enjoy the ride!”.
    // If charge is <= 20, throw an error that messages: “Scooter low on battery, please charge.”
    // If none of these are applicable, you should throw an error that states that: “Scooter is broken, please send a repair request.”
    if (this._isBroken === false && this._charge > 20) {
      this._docked = false
      console.log("Enjoy the ride!")
      return "Enjoy the ride!"
    } else if (this._isBroken === false && this._charge <= 20) {
      console.log("Scooter low on battery, please charge.")
      return "Scooter low on battery, please charge."
    } else {
      console.log("Scooter is broken, please send a repair request.")
      return "Scooter is broken, please send a repair request."
    }
  }

  dock(station) {
    // Sets the station property of the Scooter to the argument passed in
    // If no argument is passed in, you should throw an error: “Docking station required!”
    // Set docked to true
    // Set user to an empty string
    this.station = station
    console.log(station);
    if (this._station === "") {
      // throw new Error("Docking station required!");
      return "Docking station required!";
    }
    this.docked = true
    this.user = ""

  }

  // NOTE: Section 5 has starter code for a setInterval timer that can be used with the recharge() and requestRepair() methods.
  async recharge() {
    // This method should update the Scooter’s charge to 100.
    console.log('Starting charge');
    console.log(this.charge);

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

    this.charge = 100
    console.log(this.charge);

    console.log('Charge complete');
  }

  async requestRepair() {
    // Uses a setInterval timer to log a message that the repair has been complete
    // Sets isBroken to false after the repair has been complete.
    console.log('Starting repair');
    console.log(this.isBroken);

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

    this.isBroken = false
    console.log(this.isBroken);
    console.log('Charge complete');
  }
}

const s1 = new Scooter('Pembroke', 'User')
console.log((s1.dock('')))
console.log(s1);
// console.log(s1.dock());
// console.log(s1.recharge());
// console.log(s1.requestRepair());




module.exports = Scooter

