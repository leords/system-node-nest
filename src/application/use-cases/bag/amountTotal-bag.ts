import { Injectable } from "@nestjs/common";
import { BagRepository } from "src/application/repositories/bag-repository"
import { FindNotFound } from "./error/find-not-found";

export interface amountTotalRequest {
    id: number
}

export interface amountTotalResponse {
    total: number
}

@Injectable()
export class AmountTotal {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: amountTotalRequest): Promise<amountTotalResponse> {

        const { id } = request

        if(!id) {
            const total = await this.bagRepository.amountTotal(id);

            return {
                total
            }
        } else {
            throw new FindNotFound
        }
    }
}

