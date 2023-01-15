import { BagRepository } from "src/application/repositories/bag-repository";
import { ErrorAddSale } from "../bag/error/error-add-sale";

interface addSaleRequest {
    id: number;
    idSale: number;
}

type addSaleResponse = void;

export class DeleteSale {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: addSaleRequest): Promise<addSaleResponse> {

        const { id, idSale } = request

        if(!id && !idSale) {
            await this.bagRepository.addSale(id, idSale)
        } else {
            throw new ErrorAddSale
        }
    }
}



