import { User } from "../entities/user/user";

export abstract class userRepository {
    abstract create(user: User) : Promise<User | null>;
    abstract delete(id: number) : Promise<User | null>
    abstract findById(id: number) : Promise<User | null>
    abstract FindMany() : Promise<User[]>
    abstract updatePassword(id: number, password: string) : Promise<void>
    abstract updateLevel(id: number, level: number) : Promise<void>
}