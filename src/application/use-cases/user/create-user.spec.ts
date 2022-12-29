import { InMemoryUsersRepository } from "test/repositories/in-memory-user.repository";
import { CreateUser } from "./create-user";

describe('create user', () => {
    it('should be able to create user', async () => {
        const usersRepository = new InMemoryUsersRepository();
        const createUser = new CreateUser(usersRepository)

        const { user } = await createUser.execute({
            name: 'Leonardo',
            password: '1234567890',
            level: 4
        });

        expect(usersRepository.users).toHaveLength(1)
        expect(usersRepository.users[0]).toEqual(user)
    });
});