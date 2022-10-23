const User = require('../src/User')

describe('testing if User class is populating our user data correctly', () => {
    const user1 = new User('GG', 'qwe123', 25)
    console.log(user1);
    test('username should be populated by the argument of username input', () => {
        expect(user1.username).toEqual('GG');
    })
    test('password should be populated by the argument of password input', () => {
        expect(user1.password).toEqual('qwe123');
    })
    test('age should be populated by the argument of age input', () => {
        expect(user1.age).toEqual(25);
    })

})
