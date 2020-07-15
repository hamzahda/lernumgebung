<<<<<<< HEAD
import { Controller, Get, Res, HttpStatus, Param, UseGuards, Post, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import UserDTO from '../dto/User.dto'
=======
import { Controller, Get, Res, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

>>>>>>> af6cfb69e4b3f6523bb8916281563a1c462995ad
@Controller('users')
export class UserController {
    constructor( private userService : UserService){}

    @Post('score')
    async set(@Body() data) {
      return this.userService.set(data);
    } 

    @Get()
    getUsers() : Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id : number) : Promise<User>{
        return this.userService.getUser(id);
    }



}
