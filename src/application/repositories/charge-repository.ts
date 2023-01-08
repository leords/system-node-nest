import { Charge } from "../entities/charge/charge";

export abstract class ChargeRepository {
    abstract create(charge: Charge): Promise<Charge | null>
    abstract delete(id: number): Promise<void>
    abstract deleteBag(id: number, bagId: number): Promise<void>
    abstract findUnique(id: number): Promise<Charge | null>
    abstract findMany(): Promise<Charge | null>
    abstract findManyByName(name: string): Promise<Charge | null>
    abstract updateRelease(id: number, release: boolean): Promise<void>
    abstract updateName(id: number, name: string): Promise<void>
    abstract updateDelivery(id: number, deliveryId: number): Promise<void>
}