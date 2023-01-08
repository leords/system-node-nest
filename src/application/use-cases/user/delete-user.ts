import { userRepository } from "src/application/repositories/user-repository";


interface DeleteUserRequest {
    _id: number
}

interface DeleteUserResponse {
    _id : number
}

export class DeleteUser {
    constructor(private userRepository: userRepository ) {}

    async execute(request: DeleteUserRequest): Promise<DeleteUserResponse> {
        const { _id } = request
        await this.userRepository.delete(_id)

        return {
            _id,
        };  
    }
}