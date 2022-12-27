import { isNotEmpty } from "class-validator";
import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator/types/decorator/decorators";

export class CreateUserBody {

    @IsNotEmpty()
    @Length(3,240)
    name: string;

    @IsNotEmpty()
    @Length(8,100)
    password: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(10)
    level: number
}