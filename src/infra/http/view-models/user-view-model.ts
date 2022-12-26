import { User } from "src/application/entities/user";


export class UserViewModel {
    static toHTTP (user: User) {
        return {
            id: user.id,
            name: user.name,
            password: user.password,
            level: user.level
        }
    }
}