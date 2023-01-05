import { Bag } from "@prisma/client";

export interface chargeProps {
    id?: number;
    release: boolean;
    name: string;
    bag: Bag;
}

export class Charge {
    private props: chargeProps;

    constructor(props: chargeProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get release(): boolean {
        return this.props.release
    }

    public set release(release: boolean) {
        this.props.release = release
    }

    public get name(): string {
        return this.props.name
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get bag(): Bag {
        return this.props.bag
    }

    public set bag(bag: Bag) {
        this.props.bag = bag
    }
}