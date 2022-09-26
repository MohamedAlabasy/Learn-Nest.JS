import { Controller, Get, Post, Put, Delete, Body, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { async } from 'rxjs';
import { People } from 'src/typeORM/entities/people.entity';
import { CreatePeople } from './dto/create-people.dto';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
    constructor(private readonly peopleService: PeopleService) { }
    @Get()
    getPeople() {
        return this.peopleService.getPeople()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createPeople(@Body() people: CreatePeople) {
        return this.peopleService.createPeople(people)
    }

    @Put(':id')
    updatePeople(@Body() people: CreatePeople, @Param('id', ParseIntPipe) _id: number) {
        return this.peopleService.updatePeople(people, _id)
    }
}
