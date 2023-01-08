
import { Bottle } from "../bottle/bottle";
import { Client } from "../client/client";
import { Employee } from "../employee/employee";

export interface loanProps {
    id?: number;
    bottle: Bottle[];
    status: boolean;
    date: Date;
    amount: number;

    employeeId: number;
    clientId: number;
}

export class Loan {
    private props: loanProps;

    constructor(props: loanProps) {
        this.props = { ...props }
    }

    public get id(): number {
        return this.props.id
    }

    public get bottle(): Bottle[] {
        return this.props.bottle
    }

    public set bottle(bottle: Bottle[]) {
        this.props.bottle = bottle
    }

    public get status(): boolean {
        return this.props.status
    }

    public set status(status: boolean) {
        this.props.status = status
    }

    public get date(): Date {
        return this.props.date
    }

    public set date(date: Date) {
        this.props.date = date
    }

    public get amount(): number {
        return this.props.amount
    }

    public set amount(amount: number) {
        this.props.amount = amount
    }

    public get employeeId(): number {
        return this.props.employeeId
    }

    public set employeeId(employeeId: number) {
        this.props.employeeId = employeeId
    }

    public get clientId(): number {
        return this.props.clientId
    }

    public set clientId(clientId: number) {
        this.props.clientId = clientId
    }
}