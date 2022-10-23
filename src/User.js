class User {
  constructor(username, password, age) {
    this._username = username
    this._password = password
    this._age = age
  }

  get username() {
    return this._username
  }

  set username(newUser) {
    this._username = newUser
  }
  
  get password() {
    return this._password
  }

  set password(newPassword) {
    this._password = newPassword
  }

  get age() {
    return this._age
  }

  set age(newAge) {
    this._age = newAge
  }

}

// console.log(user1);

module.exports = User