import { BeforeInsert, Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';
//import  * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    name: string;
    @Column()
    pword: string;
    @Column({
        default: 0
    })
    score: number;
    @Column({
        type: "simple-array"
    })
    scores: number[]

    @AfterLoad()
    set() {
        this.scores = this.scores.map(x => +x)
        let result: number
        for (const se of this.scores) {
            this.score = this.score + se
        }
    }
    @BeforeInsert()
    sett() {
        this.scores = this.scores.map(x => +x)
        let result: number
        for (const se of this.scores) {
            this.score = this.score + se
        }
    }

}
