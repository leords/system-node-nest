import { Item } from "@prisma/client";

export interface stockProps {
    id?: number;
    amount: number;
    date: Date;
    type: string
    item: Item;
}

export class Stock {
    private props: stockProps;

    constructor(props: stockProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get amount(): number {
        return this.props.amount
    }

    public set amount(amount: number) {
        this.props.amount = amount
    }

    public get date(): Date {
        return this.props.date
    }

    public set date(date: Date) {
        this.props.date = date
    }

    public get type(): string {
        return this.props.type
    }

    public set type(type: string) {
        this.props.type = type
    }

    public get item(): Item {
        return this.props.item
    }

    public set item(item: Item) {
        this.props.item = item
    }
}