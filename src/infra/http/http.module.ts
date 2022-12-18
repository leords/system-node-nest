import { Module } from "@nestjs/common";
import { CreateUser } from "src/application/use-cases/user/create-user";
import { DatabaseModule } from "../database/database.module";
import { userController } from "./controllers/user.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [userController],
    providers: [
        CreateUser
    ],
})

export class HttpModule {}