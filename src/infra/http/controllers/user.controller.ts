import { Body, Controller, Post } from "@nestjs/common";
import { CreateUser } from "src/application/use-cases/user/create-user";
import { CreateUserBody } from "../dtos/user/create-user-body";

@Controller('user')
export class userController {
    constructor(private createUser: CreateUser,

    ) {}

    @Post('new')
    async create(@Body() body: CreateUserBody) {
        const { _name, password, level } = body;

        const { user } = await this.createUser.execute({
            _name,
            password,
            level
        });

        return {
            user
        };
    }
}