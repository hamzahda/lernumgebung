import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
  imports: [ DatabaseModule, TypeOrmModule.forFeature([User])],
  providers : [...userProviders, UserService],
  controllers: [UserController],
  exports : [...userProviders]
})
export class UserModule {}