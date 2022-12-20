import { Injectable } from "@nestjs/common"
import { User } from "src/application/entities/user"

import { userRepository } from "src/application/repositories/user-repository"
import { FindNotFound } from "./error/find-not-found"

interface FindByIdUserRequest {
    _id: number
}

interface FindByIdResponse {
    user: User
}

@Injectable()
export class findByIdUser {
    constructor(private userRepository: userRepository) {}

    async execute(request: FindByIdUserRequest): Promise<FindByIdResponse> {
        const { _id } = request

        const user = await this.userRepository.findById(_id)

        if(!user) {
             throw new FindNotFound
        } else {
            return {
                user,
            }
        }
    }
}