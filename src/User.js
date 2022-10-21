class User {
  constructor(username, password, age) {
    this.username = username
    this.password = password
    this.age = age
  }

  get username() {
    return this.username
  }

  set username(newUser) {
    this.username = newUser
  }
  
  get password() {
    return this.password
  }

  set password(newPassword) {
    this.password = newPassword
  }

  get age() {
    return this.age
  }

  set age(newAge) {
    this.age = newAge
  }

}

module.exports = User