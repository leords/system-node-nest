import { Injectable } from "@nestjs/common";
import { User } from "src/application/entities/user/user";
import { userRepository } from "src/application/repositories/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements userRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User): Promise<void> {

            const raw = PrismaUserMapper.toPrisma(user)

            await this.prisma.user.create({
                data: raw
            });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique ({
            where: {
                id: id
            },
        });

        if(!user) {
            return null;
        }

        return PrismaUserMapper.toDomain(user)
    }

    async FindMany(): Promise<User[]> {
        const users = await this.prisma.user.findMany({
            orderBy: [
                {
                    name: "asc"
                } 
            ] 
        })

        if(!users) {
            return null
        }

        return users.map(PrismaUserMapper.toDomain)
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