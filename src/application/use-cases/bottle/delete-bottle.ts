import { Injectable } from "@nestjs/common";
import { BottleRepository } from "src/application/repositories/bottle-repository";

interface DeleteBottleRequest {
    id: number
}

type DeleteBottleResponse = void;

@Injectable()
export class DeleteBottle {
    constructor(private bottleRepository: BottleRepository) {}

    async execute(request: DeleteBottleRequest): Promise<DeleteBottleResponse> {
        const { id } = request;

        if(!id) {
            await this.bottleRepository.delete(id)
        }
    }
}