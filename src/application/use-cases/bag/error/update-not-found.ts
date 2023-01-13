export class UpdateNotFound extends Error {
    constructor() {
        super('Update could not be performed due to input error')
    }
}