import { Bag } from "../entities/bag/bag";

export abstract class BagRepository {
    abstract create(bag: Bag): Promise<Bag | null>
    abstract findUnique(id: number): Promise<Bag | null>
    abstract findMany(): Promise<Bag | null>
    abstract amountTotal(id: number): Promise<number>
    abstract delete(id: number): Promise<void>
    abstract updateStatus(id:number, status: boolean): Promise<void>
    abstract deleteSale(id: number, idSale: number): Promise<void>
    abstract addSale(id: number, idSale: number): Promise<void>
}