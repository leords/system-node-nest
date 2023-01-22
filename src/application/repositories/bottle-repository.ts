import { Bottle } from "../entities/bottle/bottle";

export abstract class BottleRepository {
    abstract create(bottle: Bottle): Promise<Bottle | null>
    abstract delete(id: number): Promise<void>
    abstract findUnique(id: number): Promise<Bottle | null>
    abstract findMany(): Promise<Bottle[] | null>
    abstract updateName(id: number, name: string): Promise<void>
    abstract updateStatus(id: number, status: boolean)
}