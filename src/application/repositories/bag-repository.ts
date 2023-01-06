import { Bag } from "../entities/bag/bag";

export abstract class bagRepository {
    abstract create(bag: Bag): Promise<Bag | null>
    abstract findUnique(id: number): Promise<Bag | null>
    abstract findMany(): Promise<Bag | null>
    abstract amoutTotal(id: number): Promise<number>
    abstract delete(id: number): Promise<void>
    abstract updateStatus(id:number, status: boolean): Promise<void>
    abstract updateSale(id: number, idSale: number): Promise<void>
}