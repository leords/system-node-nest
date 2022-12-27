export class Name {
    private readonly name: string;


    get value(): string {
        return this.name;
    }

    private validateNameLengh(name: string): boolean {
        return name.length >= 3 && name.length <= 100;
    }

    private validateNameCharacters(name: string) : boolean {

        const validateNameCharacters = name.indexOf('@' || '_' || '-' || '!' || '#' || '*' || '$' || '&' || '%');

        if(validateNameCharacters >= 0) {
            return false
        }
        return true
    }

    constructor(name: string) {
        const isNameLengthValid = this.validateNameLengh(name);
        const isNameCharactersValid = this.validateNameCharacters(name);

        if(!isNameLengthValid) {
            throw new Error('Name length error.')
        }
        else if (!isNameCharactersValid) {
            throw new Error('Name type characters error.')
        }

        this.name = name
    }
}