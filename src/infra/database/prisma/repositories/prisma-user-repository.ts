import { User } from "src/application/entities/user/user";
import { userRepository } from "src/application/repositories/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

export class PrismaUserRepository implements userRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User): Promise<User | null> {

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

            return PrismaUserMapper.toDomain(userAlreadyExist);
        }
        return null
    }

    async delete(id: number): Promise<void> {
        const user = await this.prisma.user.delete({
            where: {
                id: id
            }
        });
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


    async FindMany(): Promise<User[] | null> {
        const userFindMany = await this.prisma.user.findMany()

        if(!userFindMany) {
            return null
        }

        return userFindMany.map(PrismaUserMapper.toDomain)
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