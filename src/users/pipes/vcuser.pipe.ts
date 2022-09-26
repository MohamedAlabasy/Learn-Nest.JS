import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from './../dtos/createUsers.dto';

@Injectable()
export class VcuserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value.age);
    console.log(metadata);
    const myAge = +(value.age.toFixed())
    return {
      ...value,
      age: myAge
    }
  }
}
