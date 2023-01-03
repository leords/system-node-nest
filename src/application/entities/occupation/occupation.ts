import { Employee } from "@prisma/client";


export interface occupationProps {
    id?: number;
    name: string;
    employee: Employee
}

export class Occupation {
    private props? : occupationProps

    constructor(props: occupationProps) {
        this.props = {...props};
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

    public get employee(): Employee {
        return this.props.employee
    }

    public set employee(employee: Employee) {
        this.props.employee = employee
    }
}