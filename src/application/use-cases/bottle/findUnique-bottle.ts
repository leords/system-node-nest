import { Injectable } from "@nestjs/common"
import { Bottle } from "src/application/entities/bottle/bottle"
import { BottleRepository } from "src/application/repositories/bottle-repository"
import { FindNotFound } from "./error/find-not-found"


interface FindUniqueBottleRequest {
    id: number
}

interface FindUniqueBottleResponse {
    bottle: Bottle
}

@Injectable()
export class FindUnique {
    constructor(private bottleRepository: BottleRepository) {}

    async execute(request: FindUniqueBottleRequest): Promise<FindUniqueBottleResponse> {
        const { id } = request;

        if(!id) {
            const bottle = await this.bottleRepository.findUnique(id);

            return {
                bottle
            }
        } else {
            throw new FindNotFound
        }
    }
}