export class ErrorAddSale extends Error {
    constructor() {
        super('Unable to add sale, check input data')
    }
}