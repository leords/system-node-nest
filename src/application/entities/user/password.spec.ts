import { Password } from "./password";


describe('User password', () => {
    it('should be able to create user password', () => {
        const password = new Password('123456789');

        expect(password).toBeTruthy();
    });

    it('should be able to create a user password with less than 8 characters', () => {
        expect(() => new Password('a'.repeat(7))).toThrow();
    });

    it('should be able to create a user password with more than 100 characters', () => {

        expect(() => new Password('a'.repeat(101))).toThrow();
    });
})