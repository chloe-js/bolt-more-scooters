const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('testing if ScooterApp class is functioning', () => {
  const session1 = new ScooterApp()
  // console.log(session1);
  test('registeredUsers should be populated by an empty object', () => {
    expect(session1.registeredUsers).toEqual({});
  })
})

// METHODS

describe('checking Scooter rent method', () => {
  const session1 = new ScooterApp()
  test('Check to see if the user is not already registered”', () => {
    const user1 = new User('BG', 'qwe123', 19)
    session1.register(user1)
    expect(session1.registeredUsers[user1.username]).toEqual({ password: 'qwe123', age: 19, loggedIn: false, accountChange: 0 });
  })
  test('Check to see if the user is already registered, if they are, return “already registered!”', () => {
    const user1 = new User('BG', 'qwe123', 19)
    session1.register(user1)
    const user2 = new User('BG', 'asd432', 44)
    expect(session1.register(user2)).toEqual("already registered!")
  })
  test("Check to see if the user is younger than 17, and return “too young to register!”", () => {
    const user1 = new User('BG', 'qwe123', 15)
    expect(session1.register(user1)).toEqual("too young to register!");
  })
  test("The object key should be the user’s username", () => {
    const user1 = new User('BG', 'qwe123', 19)
    session1.register(user1)
    expect(Object.keys(session1.registeredUsers)[0]).toEqual('BG');
  })
});

// logIn(username, password)
describe('checking Scooter logIn(username, password) method', () => {
  const session1 = new ScooterApp()
  test("should log the user in successfully and return the string 'logged in successfully'", () => {
    const user1 = new User('BG', 'qwe123', 19)
    session1.register(user1)
    session1.logIn(user1.username, user1.password)
    expect(session1.logIn(user1.username, user1.password)).toEqual("logged in successfully");
  })
  test("should not log the user in and return the string 'Username or password is incorrect.'", () => {
    const user1 = new User('BG', 'qwe123', 19)
    session1.register(user1)
    session1.logIn(user1.username, user1.password)
    expect(() => session1.logIn(user1.username, 'QQ345')).toThrowError("Username or password is incorrect.");
  })

  describe('checking Scooter addScooter(location, scooter) method', () => {
    const session1 = new ScooterApp()
    test("Set the Scooter's station property to the location argument and add the scooter argument to the stations", () => {
      session1.addScooter('Bronx', {
        station: 'Bronx',
        user: 'Matt',
        serial: 714,
        charge: 46,
        isBroken: false,
        docked: true
      })
      expect(session1.stations['Bronx'][0]).toEqual({
        station: 'Bronx',
        user: 'Matt',
        serial: 714,
        charge: 46,
        isBroken: false,
        docked: true
      });
    })
  })

  describe('checking Scooter RemoveScooter(scooterToRemove) method', () => {
    test("Throw an error if the scooter serial number is not located", () => {
      const session1 = new ScooterApp()
      const scooter = {
        station: 'Bronx',
        user: 'Matt',
        serial: 0,
        charge: 46,
        isBroken: false,
        docked: true
      }
      expect(() => session1.removeScooter(scooter['serial'])).toThrowError("scooter serial number is not located.")
    })
  })
  describe('checking Scooter RemoveScooter(scooterToRemove) method', () => {
    test("Identify the scooterToRemove's value for serial number and Use this serial number to remove the Scooter object from the correct location list", () => {
      const session1 = new ScooterApp()
      session1.addScooter('Bronx', {
        station: 'Bronx',
        user: 'Matt',
        serial: 714,
        charge: 46,
        isBroken: false,
        docked: true
      })
      session1.removeScooter({
        station: 'Bronx',
        user: 'Matt',
        serial: 714,
        charge: 46,
        isBroken: false,
        docked: true
      })
      expect(session1.stations['Bronx']).toEqual([]);
    })
  })

})
