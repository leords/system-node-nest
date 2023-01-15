export class ErrorDelete extends Error {
    constructor() {
        super('Unable to delete sale, check input data')
    }
}