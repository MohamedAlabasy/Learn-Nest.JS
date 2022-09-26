import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/typeORM/entities/people.entity';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  exports: [TypeOrmModule],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule { }
