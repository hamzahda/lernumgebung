import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

var fs = require('fs');

const { sleep } = require('sleepjs');

@Injectable()
export class AppService {
  async run(code) {
    let data;
    if(code.type === "inline"){
      PythonShell.runString(code.data, null, (err, output) => {
        data = output;
        console.log('data : ' + data);
      });
      await sleep(1000);
    }
    if(code.type === "script"){
      fs.writeFile('script.py', code.data, function (err) {
        if (err) return console.log(err);
      });
      PythonShell.run('script.py', null, function (err, results) {
        data = results;
      });
    }
    return data;
  }
}
