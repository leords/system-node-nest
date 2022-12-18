import { User } from "src/application/entities/user";
import { userRepository } from "src/application/repositories/user-repository";

interface CreateUserRequest {
    _name: string;
    password: string;
    level: number
}

interface CreateUserResponse {
    user: User
}

export class CreateUser {
    constructor(private userRepository: userRepository) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { _name, password, level } = request;

        const user = new User({
            _name,
            level,
            password
        });

        await this.userRepository.create(user)

        return {
            user,
        };


    }

}