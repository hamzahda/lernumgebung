import { Controller, Get, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
 
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get('/code')
  run( @Body() code : string)  {
    return  this.appService.run(code) ;
  }
  
}
