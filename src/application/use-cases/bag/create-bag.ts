import { Bag } from "src/application/entities/bag/bag";
import { Sale } from "src/application/entities/sale/sale";
import { BagRepository } from "src/application/repositories/bag-repository";
import { ErrorCreate } from "./error/error-create";

interface CreateBagRequest {
    id?: number;
    total: number;
    status: boolean;
    createdAt: Date;
    clientId: number;
    employeeSaleId: number;
    sale?: Sale[];
}

interface CreateBagResponse {
    bag: Bag;
}

export class CreateBag {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: CreateBagRequest): Promise<CreateBagResponse> {
        const { total, status, createdAt, clientId, employeeSaleId } = request

        const bag = new Bag({
            total,
            status, 
            createdAt,
            clientId,
            employeeSaleId,
        });

        if(!total && !status && !createdAt && !clientId && !employeeSaleId) {
            await this.bagRepository.create(bag);

            return {
                bag,
            }
        } 
        else {
            throw new ErrorCreate
        }
    }
}
