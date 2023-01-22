export class ErrorUpdateBottle extends Error {
    constructor() {
        super('Update not possible, check input data')
    }
}