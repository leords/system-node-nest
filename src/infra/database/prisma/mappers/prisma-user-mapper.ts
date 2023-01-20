import { User as RawUser  } from "@prisma/client";
import { Name } from "src/application/entities/user/name";
import { Password } from "src/application/entities/user/password";
import { User } from "src/application/entities/user/user";

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            name: user.name.value,
            password: user.password.value,
            level: user.level
        };
    }

    static toDomain(raw: RawUser): User {
        return {
            id: raw.id,
            name: new Name(raw.name),
            password: new Password(raw.password),
            level: raw.level
        };
    }

    
}