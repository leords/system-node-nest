import { Bottle } from "src/application/entities/bottle/bottle";
import { BottleRepository } from "src/application/repositories/bottle-repository";
import { ErrorCreate } from "./error/error-create-bottle";

interface CreateBottleRequest {
    name: string,
    status: boolean,
}

interface CreateBottleResponse {
    bottle: Bottle
}

export class CreateBottle {
    constructor(private bottleRepository: BottleRepository) {}

    async execute(request: CreateBottleRequest): Promise<CreateBottleResponse> {
        const { name, status } = request

        const bottle = new Bottle({
            name,
            status
        });

        if(!name && !status) {
            await this.bottleRepository.create(bottle);

            return {
                bottle
            }
        } else {
            throw new ErrorCreate
        }
    }
}