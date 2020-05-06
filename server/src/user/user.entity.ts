import {BeforeInsert, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import  * as bcrypt from 'bcrypt';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id : Number;
    @Column(
        {default : ''}
    )
    uname : string;
    @Column(
        {default : ''}
    )
    email:string;
    @Column(
        {default : ''}
    )
    pwrd: string;



    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.pwrd = await bcrypt.hash(this.pwrd, 10);
      }
    
}