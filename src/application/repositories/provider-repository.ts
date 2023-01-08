import { Provider } from "../entities/provider/provider";

export abstract class ProviderRepository {
    abstract create(provider: Provider): Promise<Provider | null>
    abstract delete(id: number): Promise<void>
    abstract deleteItem(id: number, ItemId: number): Promise<void>
    abstract update(
        id: number, 
        name: string, 
        email: string, 
        situation: boolean, 
        cnpj: string, 
        address: string, 
        seller: string
        ): Promise<void>
}
