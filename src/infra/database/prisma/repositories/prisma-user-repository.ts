import { User } from "src/application/entities/user";
import { userRepository } from "src/application/repositories/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

export class PrismaUserRepository implements userRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User): Promise<string> {

        const userAlreadyExist = await this.prisma.user.findUnique({
            where: {
                id: user.id
            }
        });

        if(!userAlreadyExist) {
            const raw = PrismaUserMapper.toPrisma(user)

            await this.prisma.user.create({
                data: raw
            });

            return 'ok'
        }
        return 'nok'
    }

    async delete(id: number): Promise<User | null> {
        const user = await this.prisma.user.delete({
            where: {
                id: id
            }
        });

        return user
    }


    async findById(id: number): Promise<User | null> {
        const userFindById = await this.prisma.user.findUnique ({
            where: {
                id: id
            },
        });

        if(!userFindById) {
            return null;
        }

        return PrismaUserMapper.toDomain(userFindById)
    }


    FindMany(): Promise<User[]> {
        return
    }


    async updatePassword(id: number, password: string): Promise<void> {
        await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                password: password
            }
        });
    }


    async updateLevel(id: number, level: number): Promise<void> {
        await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                level: level
            }
        });
    }
}