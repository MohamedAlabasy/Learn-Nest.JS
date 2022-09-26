import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePeople {
    @IsNotEmpty()
    @IsString()
    readonly userName: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isActive: boolean;

    // @IsNotEmpty()
    @IsDate({ message: '44444 IsDate' })
    readonly createAt: Date;


    readonly nullable: string
}
