import { Bag } from "../bag/bag";
import { Client } from "../client/client";
import { Delivery } from "../delivery/delivery";
import { Loan } from "../loan/loan";

export interface employeeProps {
    id?: number;
    name: string;
    email: string;
    address: string;
    cpf: string;
    situation: boolean;

    clients: Client;
    bags: Bag;
    deliverys: Delivery;
    loans: Loan
}

export class Employee {
    private props? : employeeProps

    constructor(props: employeeProps){
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

    public get address(): string {
        return this.props.email
    }

    public set address(address: string) {
        this.props.address = address
    }

    public get cpf(): string {
        return this.props.cpf
    }

    public set cpf(cpf: string) {
        this.props.cpf = cpf
    }

    public get situation(): boolean {
        return this.props.situation
    }

    public set situation(situation: boolean) {
        this.props.situation = situation
    }

    public get client(): Client {
        return this.props.clients
    }

    public set client(client: Client) {
        this.props.clients = client
    }

    public get bag(): Bag {
        return this.props.bags
    }

    public set bag(bag: Bag) {
        this.props.bags = bag
    }

    public get deliverys(): Delivery {
        return this.props.deliverys
    }

    public set deliverys(deliverys: Delivery) {
        this.props.deliverys = deliverys
    }

    public get loans(): Loan {
        return this.props.loans
    }

    public set loans(loan: Loan) {
        this.props.loans = loan
    }

}