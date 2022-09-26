import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { People } from 'src/typeORM/entities/people.entity';

@Entity({ name: 'profile' })
export class Profile {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true, })
    name: string;


    @ManyToOne(() => People, people => people.profile)
    people: People;
}