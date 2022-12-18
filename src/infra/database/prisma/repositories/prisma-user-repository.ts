import { User } from "src/application/entities/user";
import { userRepository } from "src/application/repositories/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

export class PrismaUserRepository implements userRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User): Promise<void> {
        const raw = PrismaUserMapper.toPrisma(user)

        await this.prisma.user.create({
            data: raw
        });
    }



    delete(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    FindMany(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    updatePassword(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateLevel(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}