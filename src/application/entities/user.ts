
export interface UserProps {
    id? : number;
    name:    string;
    password: string;
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

    public set name(name: string) {
        this.props.name = name;
    }

    public get name(): string {
        return this.props.name
    }

    public set password(password: string) {
        this.props.password = password;
    }

    public get password(): string {
        return this.props.password
    }

    public set level(level: number) {
        this.props.level = level;
    }

    public get level(): number {
        return this.props.level
    }

}