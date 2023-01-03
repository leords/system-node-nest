import { Password } from "src/application/entities/user/password";
import { User } from "src/application/entities/user/user";
import { userRepository } from "src/application/repositories/user-repository";


export class InMemoryUsersRepository implements userRepository {
    public users: User[] = [];

    async create(user: User): Promise<any> {
        this.users.push(user);
    }

    async delete(id: number): Promise<any> {
        const user = this.users.find(
            (item) => item.id === id
        );
        const indiceUser = this.users.indexOf(user)

        if(indiceUser > -1) {
            this.users.splice(indiceUser, 1)
        }
    }

    async findById(id: number): Promise<User | null> {
       const user = this.users.find(
        (item) => item.id === id 
       );

       if(!user) {
        return null
        }
    return user

    };

    async FindMany(): Promise<User[]> {
        if(!this.users) {
            return null
        }
        return this.users
    }

    async updatePassword(id: number, password: string): Promise<void> {
        this.users.forEach((item) => {
            if(item.id === id) {
                item.password = new Password(password)
            }
        });
    }

    async updateLevel(id: number, level: number): Promise<void> {
        this.users.forEach((item) => {
            if(item.id === id) {
                item.level = level
            }
        });
    }
    
}