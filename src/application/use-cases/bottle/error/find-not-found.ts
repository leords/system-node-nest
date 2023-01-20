export class FindNotFound extends Error {
    constructor() {
        super('Bottle not found, check input data!')
    }
}