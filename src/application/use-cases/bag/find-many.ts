import { Injectable } from "@nestjs/common";
import { Bag } from "src/application/entities/bag/bag";
import { BagRepository } from "src/application/repositories/bag-repository";
import { FindNotFound } from "./error/find-not-found";


interface findManyBagRequest {
    id: number
}

interface findManyBagResponse {
    bags: Bag[]
}

@Injectable()
export class FindManyBag {
    constructor(private bagRepository: BagRepository ) {}

        async execute(request: findManyBagRequest): Promise<findManyBagResponse> {

            const bags = await this.bagRepository.findMany();

            if(!bags) {
                return {
                    bags
                }
            } else {
                throw new FindNotFound
            }
        } 
}