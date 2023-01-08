import { Employee } from "../entities/employee/employee";


export abstract class EmployeeRepository {
    abstract create(employee: Employee): Promise<Employee | null>
    abstract delete(id: number): Promise<void>
    abstract findUnique(id: number): Promise<Employee | null>
    abstract findUniqueByCpf(cpf: string): Promise<Employee | null>
    abstract findMany(): Promise<Employee | null>
    abstract updateName(id: number, name: string): Promise<void>
    abstract updateAddress(id: number, address: string): Promise<void>
    abstract updateSituation(id: number, situation: boolean): Promise<void>
}