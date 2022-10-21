const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
}

module.exports = ScooterApp

// Class: ScooterApp

// Should include no parameters in the constructor

// Each ScooterApp should include the following properties

// stations: This should contain the stations that the Scooter can be checked out from. One possible approach: this can be an object or an array. One possibility is to make it an object with the following keys: Manhattan, Brooklyn, Queens, Bronx, StatenIsland.  Each key should have a value of an empty array.

// registeredUsers: populated by an empty object or array

// BONUS: A Static property called scooterSessions which should hold an empty array

// BONUS Each time a ScooterApp object is created/instantiated, it should automatically be added to the scooterSessions array

// Each ScooterApp should include the following methods

// register(user)

// Check to see if the user is not already registered, if they ARE, log to the console that they are “already registered!”.

// Check to see if the user is older than 17, if they ARE NOT, log to the console that they are “too young to register!”

// ONLY if both of these checks pass:

// Add the user to the registeredUsers object

// The object key should be the user’s username

// This object key should contain the following key value pairs:

// password: the user’s password

// age: the user’s age

// loggedIn: false

// accountChange: 0 //number

// Finally, log to the console that the ”user has been registered”.

// logIn(username, password)

// Check to see that the user is in the registeredUsers object, and then check to see that their password or matches the password argument, if either of these matches are false, throw an error: “Username or password is incorrect.”

// If the previous checks pass, mark the correct user in the registeredUsers object loggedIn property to true.

// Log to the console that the user has logged in successfully.

// addScooter(location, scooter)

// NOTE: location is a string and scooter is a Scooter object

// Set the Scooter’s station property to the location argument

// Add the scooter argument to the stations

// RemoveScooter(scooterToRemove)

// NOTE: scooterToRemove is a Scooter object

// Identify the scooterToRemove’s value for serial number

// BONUS: Use this serial number to remove the Scooter object from the correct location list

// NOTE: You’ll need to do some digging here into nested objects and/or lists

// Log to the console that the scooter has successfully been removed

// Throw an error if the scooter serial number is not located - this means that the scooterToRemove object has not previously been added.

