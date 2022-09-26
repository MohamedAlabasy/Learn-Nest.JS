import { IsNotEmpty, IsEmail, IsNumber } from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    readonly id?: number

    @IsNotEmpty()
    @IsEmail()
    readonly name: string;

    @IsNotEmpty()
    // @IsNumber()
    readonly age: number;
}