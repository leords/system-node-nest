export class FindNotFound extends Error {
    constructor() {
        super('Bag is not found')
    }
}