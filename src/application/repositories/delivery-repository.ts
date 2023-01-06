import { Delivery } from "../entities/delivery/delivery";

export abstract class DeliveryRepository {
    abstract create(delivery: Delivery): Promise<Delivery | null>
    abstract delete(id: number): Promise<void>
    abstract deleteCharge(id: number, chargeId: number): Promise<void>
    abstract findUnique(id: number): Promise<Delivery | null>
    abstract findManyByDate(date: Date): Promise<Delivery | null>
    abstract findManyByRelease(release: boolean): Promise<Delivery | null>
}