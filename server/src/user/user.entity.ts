import {BeforeInsert, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
//import  * as bcrypt from 'bcrypt';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id : Number;
    @Column()
    name : string;
    @Column()
    pword: string;
    @Column()
    ponits : points;
    @Column()
    complete : boolean;

}


interface points{
    lesson : number,
    points : number,
}