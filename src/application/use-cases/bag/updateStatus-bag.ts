import { BagRepository } from "src/application/repositories/bag-repository";
import { UpdateNotFound } from "./error/update-not-found";

export interface updateStatusRequest {
    id: number;
    status: boolean;
}

export class UpdateStatus {
    constructor(private bagRepository: BagRepository) {}

    async execute(request: updateStatusRequest): Promise<void> {

        const { id, status } = request;

        if(!id && status === true || status === false ) {
            this.bagRepository.updateStatus(id, status);
        } else {
            throw new UpdateNotFound
        }
    }
}