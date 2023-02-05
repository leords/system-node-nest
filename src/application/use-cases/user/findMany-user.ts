import { Injectable } from "@nestjs/common"
import { User } from "src/application/entities/user/user"
import { userRepository } from "src/application/repositories/user-repository"


interface FindManyUserResponse {
    users: User[]
}

@Injectable()
export class FindManyUser {
    constructor(private userRepository: userRepository) {}

        async execute(): Promise<FindManyUserResponse> {
            
        const users = await this.userRepository.FindMany()

            return {
                users
            };
        }
}