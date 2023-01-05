import { Sale } from "@prisma/client";

export interface itemProps {
    id?: number;
    name: string;
    priceBurden: number;
    priceUnity: number;
    category: string;
    milliliter: number;
    milliliterBale: number;
    createdAt: Date;
    sale: Sale;
}

export class Item {
    private props: itemProps;

    constructor(props: itemProps) {
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

    public get priceBurden(): number {
        return this.props.priceBurden
    }

    public set priceBurden(priceBurden: number) {
        this.props.priceBurden = priceBurden
    }

    public get priceUnity(): number {
        return this.props.priceUnity
    }

    public set priceUnity(priceUnity: number) {
        this.props.priceUnity = priceUnity
    }
    
    public get category(): string {
        return this.props.category
    }

    public set category(category: string) {
        this.props.category = category
    }

    public get milliliter(): number {
        return this.props.milliliter
    }

    public set milliliter(milliliter: number) {
        this.props.milliliter = milliliter
    }

    public get milliliterBale(): number {
        return this.props.milliliterBale
    }

    public set milliliterBale(milliliterBale: number) {
        this.props.milliliterBale = milliliterBale
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