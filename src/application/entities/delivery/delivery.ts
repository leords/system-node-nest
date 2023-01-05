import { Charge } from "@prisma/client";

export interface deliveryProps {
    id?: number;
    createdAt: Date;
    release: boolean;
    charge: Charge;
}

export class Delivery {
    private props: deliveryProps;

    constructor(props: deliveryProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }

    public set createdAt(createdAt: Date){
        this.props.createdAt = this.createdAt
    }

    public get release(): boolean {
        return this.props.release
    }

    public set release(release: boolean){
        this.props.release = this.release
    }

    public get charge(): Charge {
        return this.props.charge
    }

    public set charge(charge: Charge){
        this.props.charge = this.charge
    }
}