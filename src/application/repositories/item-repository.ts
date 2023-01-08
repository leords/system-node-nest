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
}

// verificar se é possivel ter apenas uma classe para fazer updates!