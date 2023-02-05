import { Body, Controller, Post, Get, Patch } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { CreateUser } from "src/application/use-cases/user/create-user";
import { DeleteUser } from "src/application/use-cases/user/delete-user";
import { FindManyUser } from "src/application/use-cases/user/findMany-user";
import { CreateUserBody } from "../dtos/user/create-user-body";
import { UserViewModel } from "../view-models/user-view-model";

@Controller('user')
export class userController {
    constructor(
        private createUser: CreateUser, 
        private findManyUser: FindManyUser,
        private deleteUser: DeleteUser,
        
        ) {}

    @Post('new')
    async create(@Body() body: CreateUserBody) {
        const { name, password, level } = body;

        const { user } = await this.createUser.execute({
            name,
            password,
            level
        });

        return {
            user: UserViewModel.toHTTP(user)
        };
    }

    @Get('list')
    async list() {
        const { users }  = await this.findManyUser.execute();

        return users
    }

    @Patch(':id/delete')
    async delete(@Param('id') id: number) {
        await this.deleteUser.execute({
            id: id
        });
    } 
}