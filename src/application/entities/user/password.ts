export class Password {
    private readonly password: string;

    get value(): string {
        return this.password;
    }

    private validatePasswordLenth(password: string): Boolean {
        return password.length >= 8 && password.length <= 100;
    }

    constructor(password: string) {
        const isPasswordValid = this.validatePasswordLenth(password);

        if(!isPasswordValid) {
            throw new Error('Password lengh error.')
        }

        this.password = password
    }
}