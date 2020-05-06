import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor( private userService : UserService){}

    @Get('')
    getUsers() : Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id : number) : Promise<User[]>{
        return this.userService.getAllUsers();
    }

    



}
