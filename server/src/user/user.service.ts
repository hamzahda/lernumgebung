import { Injectable, Inject } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User } from './user.entity';
import { Repository } from 'typeorm';
import {PythonShell} from 'python-shell';


@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
      ) {}

    async  getAllUsers() : Promise<User[]>{
        return await this.userRepository.find();
    }

    async createUser(user: User){
       await this.userRepository.save(user);
    }

    async getUser(id : number){
        return await this.userRepository.findOneOrFail(id);
    }

    async modifyUser(user: User){
       await this.userRepository.save(user)
    }

    async deleteUser(id: number){
       await this.userRepository.delete(id);
    }

    async run(){
        PythonShell.runString('x=1+1;print(x)', null, function (err) {
            if (err) throw err;
            console.log('finished');
          });
    }

    async getUserByName(name: string): Promise<User> {
        return await this.userRepository.findOneOrFail({
            where: {
                uname: name,
            }
        });
    }


}
