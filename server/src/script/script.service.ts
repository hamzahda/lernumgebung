import { Injectable, Inject } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {PythonShell} from 'python-shell';


@Injectable()
export class ScriptService {

    async run(){
        PythonShell.runString('x=1+1;print(x)', null, function (err) {
            if (err) throw err;
            console.log('finished');
          });
    }
}
