export class ErrorCreate extends Error{
    constructor() {
        super('It not possible create new Bag.');
    }
}