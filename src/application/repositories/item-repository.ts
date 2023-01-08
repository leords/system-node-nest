import { Item } from "../entities/item/item";

export abstract class ItemRepository {
    abstract create(item: Item): Promise<Item | null>
    abstract delete(id: number): Promise<void>
    abstract findUnique(id: number): Promise<Item | null>
    abstract findMany(): Promise<Item | null>

    abstract update(
        id: number, 
        name: string, 
        priceBurden: number, 
        priceUnity:number, 
        category: string, 
        milliliter: number, 
        milliliterBale: number
        ): Promise<void>

    abstract updateName(id: number, name: string): Promise<void>
    abstract updatePriceBurden(id: number, priceBurden: number): Promise<void>
    abstract updatePriceUnity(id: number, priceUnity: number): Promise<void>
    abstract updatePriceUnity(id: number, priceUnity: number): Promise<void>
}
 