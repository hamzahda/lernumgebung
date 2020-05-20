import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

var fs = require('fs');

const { sleep } = require('sleepjs');

@Injectable()
export class AppService {
  async run(code) {
    let data;
    PythonShell.runString(code.data, null, (err, output) => {
      data = output;
      console.log('data : ' + data);
    });
    await sleep(1000);

    return data;
  }
}
