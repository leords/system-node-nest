import { Loan } from "../entities/loan/loan";

export abstract class LoanRepository {
    abstract create(loan: Loan): Promise<Loan | null>
    abstract delete(id: number): Promise<void>
    abstract findUnique(id: number): Promise<void>
    abstract findMany(): Promise<void>

    abstract update(
        id: number, 
        status: boolean, 
        amount: number
        ): Promise<void>
}