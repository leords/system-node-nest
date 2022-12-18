import { User } from "src/application/entities/user";

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            name: user._name,
            password: user.password,
            level: user.level
        };
    }

    
}