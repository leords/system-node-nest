export interface bottleProps {
    id?: number;
    name: string;
    status: boolean;
}

export class Bottle {
    private props: bottleProps;

    constructor(props: bottleProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get name(): string {
        return this.props.name
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get status(): boolean {
        return this.props.status
    }

    public set status(status: boolean) {
        this.props.status = status
    }
}