import { Item } from "@prisma/client";

export interface providerProps {
    id?: number;
    name: string;
    email: string;
    situation: boolean;
    cnpj: string;
    address: string;
    seller: string;
    item: Item;
    stock: Stock;
}

export class Provider {
    private props: providerProps;

    constructor(props: providerProps) {
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

    public get email(): string {
        return this.props.email
    }

    public set email(email: string) {
        this.props.email = email
    }

    public get situation(): boolean {
        return this.props.situation
    }

    public set situation(situation: boolean) {
        this.props.situation = situation
    }

    public get cnpj(): string {
        return this.props.cnpj
    }

    public set cnpj(cnpj: string) {
        this.props.cnpj = cnpj
    }

    public get address(): string {
        return this.props.address
    }

    public set address(address: string) {
        this.props.address = address
    }

    public get seller(): string {
        return this.props.seller
    }

    public set seller(seller: string) {
        this.props.seller = seller
    }

    public get item(): Item {
        return this.props.item
    }

    public set item(item: Item) {
        this.props.item = item
    }

    public get stock(): Stock {
        return this.props.stock
    }

    public set stock(stock: Stock) {
        this.props.stock = stock
    }
}