import { Name } from "./name";


describe('User name', () => {
    it('should be able to create a user name', () => {
        const name = new Name('Leonardo')

        expect(name).toBeTruthy();
    });

    it('should not be able to create a User name with less than 4 characters', () => {
        expect(() => new Name('aa')).toThrow();
    });

    it('should not be abre to create a user name with less than 100 characters', () => {
        expect(() => new Name('a'.repeat(101))).toThrow()
    })

});