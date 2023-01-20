import { Injectable } from "@nestjs/common";
import { BagRepository } from "src/application/repositories/bag-repository";
import { FindNotFound } from "./error/find-not-found";

export interface deleteBagRequest {
    id: number
}

@Injectable()
export class DeteleBag {
    constructor(private bagRespository: BagRepository) {}

    async execute(request: deleteBagRequest): Promise<void> {
        const { id } = request;

        if(!id) {
            this.bagRespository.delete(id);
        } else {
            throw new FindNotFound
        }
    }
}