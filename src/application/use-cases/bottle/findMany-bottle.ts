import { Injectable } from "@nestjs/common";
import { Bottle } from "src/application/entities/bottle/bottle";
import { BottleRepository } from "src/application/repositories/bottle-repository";


interface findManyBottleResponse {
    bottles: Bottle[]
}

@Injectable()
export class FindManyBottle {
    constructor(private bottleRepository: BottleRepository ) {}

    async execute(): Promise<findManyBottleResponse> {

        const bottles = await this.bottleRepository.findMany()

        return {
            bottles
        }
    }
}