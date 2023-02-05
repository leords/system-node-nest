import { Injectable } from "@nestjs/common";
import { userRepository } from "src/application/repositories/user-repository";
import { UpdateNotFound } from "./error/updade-not-found";

interface UpdatePasswordUserRequest {
    _id: number
    password: string
}

type UpdatePasswordUserResponse = void;

@Injectable()
export class UpdatePasswordUser {
    constructor(private userRepository: userRepository) {}

    async execute(request: UpdatePasswordUserRequest): Promise<UpdatePasswordUserResponse> {
        const { _id, password } = request

        if(!_id && !password) {
            throw new UpdateNotFound
        } else {
            await this.userRepository.updatePassword(_id, password)
        }
    }
}