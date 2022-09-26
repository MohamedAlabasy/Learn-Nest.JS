import { Exclude } from "class-transformer";
import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, ValidateNested } from "class-validator";

export class CreatePeople {
    @IsNotEmpty()
    @IsString()
    readonly userName: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

    @IsNotEmpty()
    @IsBoolean()
    // @Exclude()
    readonly isActive: boolean;

    // @IsNotEmpty()
    // @IsDate({ message: '44444 IsDate' })
    readonly createAt: Date;

    @Exclude()
    readonly nullable: string

    // @IsNotEmptyObject()
    // @ValidateNested()
    // @Type(() => CreateDTO)
    // readonly dataObject: CreateDTO


    // constructor(partial: Partial<CreatePeople>) {
    //     Object.assign(this, partial)
    // }
}
