import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";

import { userController } from "./controllers/user.controller";

import { CreateUser } from "src/application/use-cases/user/create-user";
import { FindManyUser } from "src/application/use-cases/user/findMany-user";
import { DeleteUser } from "src/application/use-cases/user/delete-user";


@Module({
    imports: [DatabaseModule],
    controllers: [userController],
    providers: [
        CreateUser,
        FindManyUser,
        DeleteUser
    ],
})

export class HttpModule {}