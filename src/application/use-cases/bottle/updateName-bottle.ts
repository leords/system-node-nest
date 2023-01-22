import { BottleRepository } from "src/application/repositories/bottle-repository";
import { ErrorUpdateBottle } from "./error/error-update-bottle";

interface UpdateNameBottleRequest {
    id: number,
    name: string,
}

type UpdateNameBottleResponse = void

export class UpdateNameBottle {
    constructor(private bottleRepository: BottleRepository) {}

    async execute(request: UpdateNameBottleRequest): Promise<UpdateNameBottleResponse> {
        const { id, name } = request;

        if(!id && !name) {
            this.bottleRepository.updateName(id, name);
        } else {
            throw new ErrorUpdateBottle
        }
    }
}