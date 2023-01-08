import { Bag } from "@prisma/client";
import { Loan } from "../loan/loan";

export interface clientProps {
    id?: number;
    name: string;
    email: string;
    city: string;
    address: string;
    situation: boolean;
    bag: Bag[];
    loan: Loan[]; 
    employeeId: number

}

export class Client {
    private props? : clientProps

    constructor(props: clientProps) {
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

    public get city(): string {
        return this.props.city
    }

    public set city(city: string) {
        this.props.city = city
    }

    public get address(): string {
        return this.props.address
    }

    public set address(address: string) {
        this.props.address = address
    }

    public get situation(): boolean {
        return this.props.situation
    }

    public set situation(situation: boolean) {
        this.props.situation = situation
    }

    public get bag(): Bag[] {
        return this.props.bag
    }

    public set bag(bag: Bag[]) {
        this.props.bag = bag
    }

    public get loan(): Loan[] {
        return this.props.loan
    }

    public set loan(loan: Loan[]) {
        this.props.loan = loan
    }

    public get employeeId(): number {
        return this.props.employeeId
    }

    public set employeeId(employee: number) {
        this.props.employeeId = employee
    }
    
}