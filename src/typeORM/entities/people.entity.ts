import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'people' })
export class People {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true, })
    userName: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    // @Column({ default: new Date() })
    @Column()
    createAt: Date;

    @Column({ nullable: true })
    nullable: string

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // profile: Profile

    // @OneToMany(()=>Profile)
    @OneToMany(() => Profile, profile => profile.people)
    profile: Profile[];
}