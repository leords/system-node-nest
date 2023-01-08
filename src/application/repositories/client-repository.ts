import { Client } from "../entities/client/client";

export abstract class ClientRepository {
    abstract create(client: Client): Promise<Client | null>
    abstract delete(id: number): Promise<void> 
    abstract findUniqueById(id: number): Promise<Client | null>
    abstract findUniqueByCnpj(cnpj: string): Promise<Client | null>
    abstract findManyByCity(city: string): Promise<Client | null>
    abstract findManyBySituation(situation: boolean): Promise<Client | null>
    abstract findManyByName(name: string): Promise<Client | null>
    abstract findMany(): Promise<Client | null>
}