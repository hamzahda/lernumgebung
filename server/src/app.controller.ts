import { Controller, Get, UseGuards, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt.guard';


@Controller('')
export class AppController {
 
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/code')
  run( @Body() code : string)  {
    return  this.appService.run(code) ;
  }
  
}
