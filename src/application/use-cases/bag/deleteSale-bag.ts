import { Injectable } from "@nestjs/common";
import { BagRepository } from "src/application/repositories/bag-repository";
import { ErrorDelete } from "./error/error-delete-sale";

interface deleteSaleRequest {
    id: number;
    idSale: number
}

type deleteSaleResponse = void;

@Injectable()
export class DeleteSale {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: deleteSaleRequest): Promise<deleteSaleResponse> {

        const { id, idSale } = request

        if(!id && !idSale ) {

            await this.bagRepository.deleteSale(id, idSale);
        } else {
            throw new ErrorDelete
        }
    }
}