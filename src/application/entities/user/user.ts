import { Name } from "./name";
import { Password } from "./password";

export interface UserProps {
    id? : number;
    name:  Name;
    password: Password;
    level:    number;
}

export class User {

    private props?: UserProps

    constructor(props: UserProps) {
        this.props = { ...props };
    }

    public get id(): number {
        return this.props.id
    }

    public set name(name: Name) {
        this.props.name = name;
    }

    public get name(): Name {
        return this.props.name
    }

    public set password(password: Password) {
        this.props.password = password;
    }

    public get password(): Password {
        return this.props.password
    }

    public set level(level: number) {
        this.props.level = level;
    }

    public get level(): number {
        return this.props.level
    }

}