import { User } from "../entities/user";

export abstract class userRepository {
    abstract create(user: User) : Promise<void>;
    abstract delete(id: string) : Promise<User | null>
    abstract findById(id: string) : Promise<User | null>
    abstract FindMany() : Promise<User[]>
    abstract updatePassword(id: string) : Promise<void>
    abstract updateLevel(id: number) : Promise<void>
}