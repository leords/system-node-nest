import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateUser } from "src/application/use-cases/user/create-user";
import { FindManyUser } from "src/application/use-cases/user/findMany-user";
import { CreateUserBody } from "../dtos/user/create-user-body";

@Controller('user')
export class userController {
    constructor(private createUser: CreateUser, private findManyUser: FindManyUser) {}

    @Post('new')
    async create(@Body() body: CreateUserBody) {
        const { name, password, level } = body;

        const { user } = await this.createUser.execute({
            name,
            password,
            level
        });

        return {
            user
        };
    }

    @Get('list')
    async list() {
        const { users }  = await this.findManyUser.execute();

        return users
    }
}