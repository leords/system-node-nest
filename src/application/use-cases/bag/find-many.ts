import { Bag } from "src/application/entities/bag/bag";
import { BagRepository } from "src/application/repositories/bag-repository";
import { FindNotFound } from "./error/find-not-found";

export interface FindManyResponse {

}

export interface FindManyRequest {
    bag: Bag[];
}

export class FindMany {
    constructor(private bagRepository: BagRepository ) {}

        async execute(request: FindManyRequest): Promise<FindManyResponse> {

            const users = this.bagRepository.findMany();

            if(!users) {
                return {
                    users
                }
            } else {
                throw new FindNotFound
            }
        } 
}