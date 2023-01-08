import { Stock } from "../entities/stock/stock";

export abstract class StockRepository {
    abstract create(stock: Stock): Promise<Stock | null>
    abstract delete(id: number): Promise<void>
    abstract deleteItemById(id: number): Promise<void>
    abstract update(
        id: number, 
        amount: number, 
        type: string
        ): Promise<void>
}
