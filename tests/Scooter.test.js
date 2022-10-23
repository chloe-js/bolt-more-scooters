const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('testing if Scooter class represents the individual scooters that users will rent from stations', () => {
  const s1 = new Scooter('Pembroke', 'Mike');
  // const s1 = {
  //   station: 'Pembroke',
  //   user: 'Mike',
  //   serial: 0,
  //   charge: 12222,
  //   isBroken: true,
  //   docked: true
  // }
  console.log(s1);
  test('station should be populated by the argument of station', () => {
    expect(s1.station).toEqual('Pembroke');
  })
  test('user should be populated by the argument of user', () => {
    expect(s1.user).toEqual('Mike');
  })
  test('serial should be a random number from 1 to 1000', () => {
    expect(s1.serial).toBeGreaterThanOrEqual(1);
    expect(s1.serial).toBeLessThan(1001);
  })
  test('charge should be a random number from 1 to 100', () => {
    expect(s1.charge).toBeGreaterThanOrEqual(1);
    expect(s1.charge).toBeLessThan(101);
  })
  test('isBroken should be set to false', () => {
    expect(s1.isBroken).toEqual(false);
  })
  test('docked should be set to true', () => {
    expect(s1.docked).toEqual(true);
  })
})

// Method tests
describe('checking Scooter rent method', () => {
  const s2 = new Scooter('Pembroke', 'Mike')
  test('If isBroken is set to false, and charge is > 20, then set docked to false, and log to the console, “Enjoy the ride!”', () => {
    s2.charge = 44
    console.log(s2);
    expect(s2.rent()).toEqual("Enjoy the ride!");
  })
  test('If isBroken is set to false, and charge is < 20, then set docked to false, and log to the console, "Scooter low on battery, please charge."', () => {
    s2.charge = 18
    console.log(s2);
    expect(s2.rent()).toEqual("Scooter low on battery, please charge.");
  })
  test('If isBroken is set to true, and charge is > 20, then set docked to false, and log to the console, "Scooter is broken, please send a repair request."', () => {
    s2.isBroken = true
    console.log(s2);
    expect(s2.rent()).toEqual("Scooter is broken, please send a repair request.");
  })
})
describe('checking Scooter dock method', () => {
  // dock(station)
  // Set user to an empty string
  const s2 = new Scooter('Pembroke', 'Mike')
  test('Sets the station property of the Scooter to the argument passed in', () => {
    // console.log(s2);
    expect(s2.station).toEqual("Pembroke");
  })
  test('If no argument is passed into station you should throw an error: “Docking station required!”', () => {
    console.log(s2.dock(''), ' -This test RUNS');
    // expect(() => s2.dock('')).toThrowError("Docking station required!");
    expect(s2.dock('')).toEqual("Docking station required!")
  })
})

describe('checking Scooter recharge method', () => {
  test("This method should update the Scooter’s charge to 100.", async () => {
      const scooter = new Scooter();
      scooter.charge = 18
      console.log(scooter);
      await scooter.recharge(); // we need to wait for the charge!
      expect(scooter.charge).toBe(100);
      console.log(scooter);
  })
})
describe('checking Scooter requestRepair method', () => {
  test("Sets isBroken to false after the repair has been complete.", async () => {
    const scooter = new Scooter();
    scooter.isBroken = true
    console.log(scooter);
    await scooter.requestRepair(); // we need to wait for the charge!
    expect(scooter.isBroken).toBe(false);
    console.log(scooter);
})

})