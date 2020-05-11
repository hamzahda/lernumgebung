import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { ScriptService } from './script.service';

@Controller('code')
export class ScriptController {
    constructor( private scriptService : ScriptService){}

    @Get()
    run(){
        return 'code works !' ;
    }
    



}
