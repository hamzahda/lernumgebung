import { Module } from '@nestjs/common';
import { ScriptService } from './script.service';
import { ScriptController } from './script.controller';

@Module({
  imports: [ ],
  providers : [ ScriptService],
  controllers: [ScriptController],
})
export class ScriptModule {}
