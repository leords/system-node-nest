import { Bag } from "src/application/entities/bag/bag"
import { BagRepository } from "src/application/repositories/bag-repository";
import { FindNotFound } from "./error/find-not-found";

export interface BagFindUniqueRequest {
    id: number
}

export interface BagFindUniqueResponse {
    bag: Bag
}


export class FindUnique {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: BagFindUniqueRequest): Promise<BagFindUniqueResponse> {
        const { id } = request;

        if(!id) {
            const bag = await this.bagRepository.findUnique(id)
            return {
                bag
            }
        } 
        else {
            throw new FindNotFound 
        }
        
    }
}