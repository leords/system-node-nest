import { BottleRepository } from "src/application/repositories/bottle-repository";
import { ErrorUpdateBottle } from "./error/error-update-bottle";

interface UpdateStatusBottleRequest {
    id: number,
    status: boolean
}

type UpdateStatusBottleResponse = void;


export class UpdateStatusBottle {
    constructor(private bottleRepository: BottleRepository) {}

    async execute(request: UpdateStatusBottleRequest): Promise<UpdateStatusBottleResponse> {
        const { id, status } = request;

        if(!id && !status) {
            this.bottleRepository.updateStatus(id, status)
        } else {
            throw new ErrorUpdateBottle
        }
    }
}