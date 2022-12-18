import { Module } from "@nestjs/common";
import { userRepository } from "src/application/repositories/user-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaUserRepository } from "./prisma/repositories/prisma-user-repository";

@Module({
    imports:[],
    controllers:[],
    providers: [
        PrismaService,
        {
            provide: userRepository,
            useClass: PrismaUserRepository
        },

    ],
    exports: [userRepository]
})

export class DatabaseModule {}