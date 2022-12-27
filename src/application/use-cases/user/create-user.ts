import { Name } from "src/application/entities/user/name";
import { Password } from "src/application/entities/user/password";
import { User } from "src/application/entities/user/user";
import { userRepository } from "src/application/repositories/user-repository";

interface CreateUserRequest {
    name: string;
    password: string;
    level: number
}

interface CreateUserResponse {
    user: User
}

export class CreateUser {
    constructor(private userRepository: userRepository) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { name, password, level } = request;

        const user = new User({
            name: new Name(name),
            level,
            password: new Password(password)
        });

        await this.userRepository.create(user)

        return {
            user,
        };


    }

}