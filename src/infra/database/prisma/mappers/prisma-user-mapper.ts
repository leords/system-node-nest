import { User } from "src/application/entities/user";

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            name: user.name,
            password: user.password,
            level: user.level
        };
    }

    static toDomain(user: User) {
        return {
            id: user.id,
            name: user.name,
            password: user.password,
            level: user.level
        };
    }

    
}