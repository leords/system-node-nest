import { Sale } from "../entities/sale/sale";

export abstract class SaleRepository {
    abstract create(sale: Sale): Promise<Sale | null>
    abstract delete(id: number): Promise<void>
    abstract update(
        id: number, 
        amount: number, 
        total: number
        ): Promise<void>
    abstract findUnique(id: number): Promise<Sale | null>
    abstract findMany(): Promise<Sale | null>
}