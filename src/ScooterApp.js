const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    // BONUS: A Static property called scooterSessions which should hold an empty array
    // BONUS Each time a ScooterApp object is created/instantiated, it should automatically be added to the scooterSessions array
    ScooterApp.createdScooterSession++
    // stations: This should contain the stations that the Scooter can be checked out from. One possible approach: this can be an object or an array. One possibility is to make it an object with the following keys: Manhattan, Brooklyn, Queens, Bronx, StatenIsland.  Each key should have a value of an empty array.
    this._stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [    
        {
        _station: 'Bronx',
        _user: 'Berry',
        _serial: 987,
        _charge: 64,
        _isBroken: false,
        _docked: true
      },
      {
        _station: 'Bronx',
        _user: 'Berry',
        _serial: 222,
        _charge: 64,
        _isBroken: false,
        _docked: true
      }],
      StatenIsland: []
    }
    // registeredUsers: populated by an empty object or array
    this._registeredUsers = {} // user, age, password

  }
  get stations() {
    return this._stations
  }

  set stations(newStation) {
    this._stations = newStation
  }

  get registeredUsers() {
    return this._registeredUsers
  }

  set registeredUsers(newRegisteredUsers) {
    this._registeredUsers = newRegisteredUsers
  }

  register(user) {
    // Check to see if the user is not already registered, if they ARE, log to the console that they are “already registered!”.
    // Check to see if the user is older than 17, if they ARE NOT, log to the console that they are “too young to register!”

    const usernameCheck = Object.keys(this.registeredUsers).includes(user.username)

    if (user.age <= 17) {
      console.log("too young to register!");
    } else if (usernameCheck) {
      console.log("already registered!")
    } else {
      const newUser = user.username;
      this._registeredUsers[newUser] = { password: user.password, age: user.age, loggedIn: false, accountChange: 0 };
      console.log("user has been registered!")
      console.log(this._registeredUsers)
    }
    // ONLY if both of these checks pass:
    // Add the user to the registeredUsers object
    // The object key should be the user’s username
    // This object key should contain the following key value pairs:

    // password: the user’s password
    // age: the user’s age
    // loggedIn: false
    // accountChange: 0 //number
    // Finally, log to the console that the ”user has been registered”.
  }

  logIn(username, password) {

    // console.log(user.name)
    // console.log(user.password)
    // console.log(this._registeredUsers.loggedIn)
    // Check to see that the user is in the registeredUsers object, and then check to see that their password or matches the password argument, if either of these matches are false, throw an error: “Username or password is incorrect.”
    // console.log(username, password);
    console.log(this.registeredUsers[username], ' --LOG')
    if (this.registeredUsers[username] && this.registeredUsers[username].password === password) {
      console.log("logging in....");
      this.registeredUsers[username].loggedIn = true;
      setTimeout(() => {
        console.log(`You are now logged in, welcome ${username}`);
        console.log(this.registeredUsers[username]);
      }, 1000)
      // If the previous checks pass, mark the correct user in the registeredUsers object loggedIn property to true.
      // Log to the console that the user has logged in successfully.
    } else {
      const err = new Error("Username or password is incorrect.")
      throw err;
    }
  }

  addScooter(location, scooter) {
    // NOTE: location is a string and scooter is a Scooter object
    // console.log(location)
    // Set the Scooter’s station property to the location argument
    scooter.station = location
    // Add the scooter argument to the stations
    this.stations[location].push(scooter)
    // console.log(this.stations);
  }

  RemoveScooter(scooterToRemove) {
    // NOTE: scooterToRemove is a Scooter object
    // Identify the scooterToRemove’s value for serial number 
    const serialRemove = scooterToRemove.serial
    if(!serialRemove){
      // Throw an error if the scooter serial number is not located - this means that the scooterToRemove object has not previously been added.
      const serialErr = new Error("scooter serial number is not located.")
      throw serialErr;
    }
    console.log(this.stations);
    console.log(scooterToRemove, ' - - -scooter obj');
    // BONUS: Use this serial number to remove the Scooter object from the correct location list
    // NOTE: You’ll need to do some digging here into nested objects and/or lists
    this.stations[scooterToRemove.station].forEach((v, i) => {
      if(v.serial === serialRemove){
        this.stations[scooterToRemove.station].splice(i)
        // Log to the console that the scooter has successfully been removed
        console.log("scooter has successfully been removed");
      }
    })


  }
  static createdScooterSession = 0

  static scooterSessions = []

  static createdScooterSession(session) {
    ScooterApp.scooterSessions.push(session)
  }
}

const user1 = new User('BG', 'qwe123', 19)
const user2 = new User('AB', 'poi345', 42)
const user3 = new User('EN', 'rty567', 12)
const user4 = new User('CC', 'dfg678', 17)
const user5 = new User('BG', 'dfg678', 17)

const session1 = new ScooterApp()
// console.log(session1.register(user1));
// console.log(session1.register(user2));
// console.log(session1.register(user3));
// console.log(session1.register(user4));
// console.log(session1.register(user5));
const sco = new Scooter('Rochford', 'Berry')
session1.addScooter('Bronx', sco);
// session1.RemoveScooter(sco)
// console.log(sco);
// console.log(sco.serial);



// console.log(session1);
// // not tallying?
console.log(ScooterApp.scooterSessions);


module.exports = ScooterApp