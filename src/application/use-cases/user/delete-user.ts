import { Injectable } from "@nestjs/common";
import { userRepository } from "src/application/repositories/user-repository";


interface DeleteUserRequest {
    id: number
}

interface DeleteUserResponse {
    id : number
}

@Injectable()
export class DeleteUser {
    constructor(private userRepository: userRepository ) {}

    async execute(request: DeleteUserRequest): Promise<DeleteUserResponse> {
        const { id } = request
        await this.userRepository.delete(id)

        return {
            id,
        };  
    }
}