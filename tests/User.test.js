const User = require('../src/User')

describe('testing if User class is populating our user data correctly', () => {
    test('username should be populated by the argument of username input', () => {
        //   // edit this to be a real test!
        //   const expectedValue = ""
        //   const actualValue = sum(1, 2)
        expect(user1.username).toEqual('GG');
    })
    test('password should be populated by the argument of password input', () => {
        //   // edit this to be a real test!
        //   const expectedValue = ""
        //   const actualValue = sum(1, 2)
        expect(user1.password).toEqual('qwe123');
    })
    test('age should be populated by the argument of age input', () => {
        //   // edit this to be a real test!
        //   const expectedValue = ""
        //   const actualValue = sum(1, 2)
        expect(user1.age).toEqual(25);
    })

})
const user1 = new User('GG', 'qwe123', 25)
console.log(user1);
