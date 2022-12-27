import { Name } from "./name";
import { Password } from "./password";
import { User } from "./user";

describe('User', () => {

    it('should be able to create a user', () => {
        const user = new User ({
            name: new Name('Leonardo'),
            password: new Password('123456789'),
            level: 4
        })

        expect(user).toBeTruthy();
    });
});
