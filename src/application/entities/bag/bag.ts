import { Sale } from "@prisma/client";

export interface bagProps {
    id?: number;
    total: number;
    status: boolean;
    createdAt: Date;
    sale: Sale;
}

export class Bag {
    private props: bagProps;

    constructor(props: bagProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get total(): number {
        return this.props.total
    }

    public set total(total: number) {
        this.props.total = total
    }

    public get status(): boolean {
        return this.props.status
    }

    public set status(status: boolean) {
        this.props.status = status
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }

    public set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt
    }

    public get sale(): Sale {
        return this.props.sale
    }

    public set sale(sale: Sale) {
        this.props.sale = sale
    }
}

