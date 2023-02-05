import { Injectable } from "@nestjs/common";
import { userRepository } from "src/application/repositories/user-repository";
import { UpdateNotFound } from "./error/updade-not-found";

interface UpdateLevelUserRequest {
    id: number
    level: number 
}

type UpdateLevelUserResponse = void;

@Injectable()
export class UpdateLevelUser {
    constructor(private userRepository: userRepository) {}

    async execute(request: UpdateLevelUserRequest) : Promise<UpdateLevelUserResponse> {
        const { id, level } = request

        if(!id && !level) {
            throw new UpdateNotFound
        } else {
            await this.userRepository.updateLevel(id, level)
        }
    }
}