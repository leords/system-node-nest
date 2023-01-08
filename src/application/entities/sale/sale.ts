export interface saleProps {
    id?: number;
    amount: number;
    total: number;

    itemId: number;
    bagId: number;
}

export class Sale {
    private props: saleProps;

    constructor(props: saleProps) {
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

    public get total(): number {
        return this.props.total
    }

    public set total(total: number) {
        this.props.total = total
    }
} 