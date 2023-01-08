import { Occupation } from "../entities/occupation/occupation";

export abstract class OccupationRepository {
    abstract create(occupation: Occupation): Promise<Occupation | null>
    abstract delete(id: number): Promise<void>
    abstract findUnique(id: number): Promise<Occupation | null>
    abstract findMany(): Promise<Occupation | null>
    abstract findManyByName(name: string): Promise<Occupation | null>
    abstract update(name: string): Promise<void>
}