export class UpdateNotFound extends Error{
    constructor() {
        super('User update not found.')
    }
}