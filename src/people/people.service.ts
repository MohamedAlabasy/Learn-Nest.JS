import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { People } from './../typeORM/entities/people.entity';
import { CreatePeople } from './dto/create-people.dto';

@Injectable()
export class PeopleService {
    constructor(@InjectRepository(People) private userRepository: Repository<People>) { }
    // getPeople() {
    //     this.userRepository.find()
    //         .then(data => {
    //             console.log(data);
    //             return data
    //         }).catch(error => {
    //             console.log(error);
    //             return new HttpException(error, HttpStatus.NOT_FOUND)
    //         })
    // }
    getPeople() {
        // return this.userRepository.find({relations:['profile']})
        return this.userRepository.find()
    }

    createPeople(people: CreatePeople) {
        const newPeople = this.userRepository.create({
            ...people,
            createAt: new Date()
        });
        return this.userRepository.save(newPeople)
    }

    updatePeople(people: CreatePeople, _id: number) {
        return this.userRepository.update({ id: _id }, { ...people })
    }
    DeletePeople(id: number) {
        return this.userRepository.delete({ id })
    }
}
