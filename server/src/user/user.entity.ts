import {BeforeInsert, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import  * as bcrypt from 'bcrypt';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id : Number;
    @Column()
    name : string;
    @Column()
    pword: string;



    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.pword = await bcrypt.hash(this.pword, 10);
      }
    
}