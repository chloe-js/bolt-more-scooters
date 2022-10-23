const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('testing if Scooter class represents the individual scooters that users will rent from stations', () => {
  test('station: populated by the argument of station', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
  test('user: populated by the argument of user', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
  test('serial: a random number from 1 to 1000', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
  test('charge: a random number from 1 to 100', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
  test('isBroken: set to false', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
  test('docked: set to true', () => {
    //   const expectedValue = ""
    //   const actualValue = sum(1, 2)
    // expect(false).toEqual(true);
  })
})

const s1 = new Scooter('Pembroke', 'User')
console.log(s1);


//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
//   test("charge", async () => {
//     const scooter = new Scooter();
//     await scooter.charge(); // we need to wait for the charge!
//     expect(newScooter.charge).toBe(100);
// });
//   test("charge", async () => {
//     const scooter = new Scooter();
//     await scooter.charge(); // we need to wait for the charge!
//     expect(newScooter.charge).toBe(100);
// });

})

// Each Scooter should have the following methods
// rent()
// If isBroken is set to false, and charge is > 20, then set docked to false, and log to the console, “Enjoy the ride!”.
// If charge is <= 20, throw an error that messages: “Scooter low on battery, please charge.”
// If none of these are applicable, you should throw an error that states that: “Scooter is broken, please send a repair request.”
// dock(station)
// Sets the station property of the Scooter to the argument passed in
// If no argument is passed in, you should throw an error: “Docking station required!”
// Set docked to true
// Set user to an empty string
// recharge()
// This method should update the Scooter’s charge to 100.
// requestRepair()
// Uses a setInterval timer to log a message that the repair has been complete
// Sets isBroken to false after the repair has been complete.
// NOTE: Section 5 has starter code for a setInterval timer that can be used with the recharge() and requestRepair() methods.