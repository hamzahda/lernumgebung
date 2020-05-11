import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

const { sleep } = require('sleepjs')

@Injectable()
export class AppService {

  
 async run(code : string) {
    let data;
    code = "print('test')";
    PythonShell.runString(code, null, (err, output) => {data = output; console.log('data : ' + data);});
    await sleep(1000);

    return data;
  }
}
