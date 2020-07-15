import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import dt from '../../dt'
@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(user: User) {
    await this.userRepository.save(user);
  }

  async getUser(id: number) {
    return await this.userRepository.findOneOrFail(id);
  }

  async modifyUser(user: User) {
    await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    await this.userRepository.delete(id);
  }

  async getUserByName(name: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        name: name,
      },
   });
    if(!user) {
      console.log("test");
      
      throw new NotFoundException(`User "${name}" is not registered yet`);
    }
    return user;
  }

  async set(data){
    let user = await this.getUserByName(data.name)
    user.scores[data.lektion] = data.score
    return await this.userRepository.save(user);
  }
}
