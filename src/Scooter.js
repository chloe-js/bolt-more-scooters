// Station the scooter is checked out from //

// User that checked out the Scooter //
class Scooter{
  // This class represents the individual scooters that users will rent from stations.
  constructor(station, user, serial, charge, isBroken, docked) {
// station: populated by the argument of station
    this.station = station
// user: populated by the argument of user
    this.user = user
// serial: a random number from 1 to 1000
    this.serial = serial
// charge: a random number from 1 to 100
    this.charge = charge
// isBroken: set to false
    this.isBroken = isBroken
// docked: set to true
    this.docked = docked
  }

  get station() {
    return this.station
  }

  set station(newStation) {
    this.station = newStation
  }

  get user() {
    return this.user
  }

  set user(newUser) {
    this.user = newUser
  }

  get serial() {
    return this.serial
  }

  set serial(newSerial) {
    this.serial = newSerial
  }

  get charge() {
    return this.charge
  }

  set charge(newCharge) {
    this.charge = newCharge
  }

  get isBroken() {
    return this.isBroken
  }

  set isBroken(newIsBroken) {
    this.isBroken = newIsBroken
  }

  get docked() {
    return this.docked
  }

  set docked(newDocked) {
    this.docked = newDocked
  }

rent() {
// If isBroken is set to false, and charge is > 20, then set docked to false, and log to the console, “Enjoy the ride!”.

// If charge is <= 20, throw an error that messages: “Scooter low on battery, please charge.”

// If none of these are applicable, you should throw an error that states that: “Scooter is broken, please send a repair request.”

  return `Thank you ${user} for your rental.`
}

dock(station) {

// Sets the station property of the Scooter to the argument passed in

// If no argument is passed in, you should throw an error: “Docking station required!”

// Set docked to true

// Set user to an empty string
}

recharge() {

// This method should update the Scooter’s charge to 100.
}

requestRepair() {

// Uses a setInterval timer to log a message that the repair has been complete

// Sets isBroken to false after the repair has been complete.
}

// NOTE: Section 5 has starter code for a setInterval timer that can be used with the recharge() and requestRepair() methods.
async charge() {
  console.log('Starting charge');
  
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
  this.charge = 100

  console.log('Charge complete');   
}

// test("charge", async () => {
//   const scooter = new Scooter();
//   await scooter.charge(); // we need to wait for the charge!
//   expect(newScooter.charge).toBe(100);
// });

}


module.exports = Scooter

