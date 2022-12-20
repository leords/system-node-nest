export class FindNotFound extends Error{
    constructor() {
        super('User find not found.');
    }
}