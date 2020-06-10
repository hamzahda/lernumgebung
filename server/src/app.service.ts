import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';

var fs = require('fs');

const { sleep } = require('sleepjs');

@Injectable()
export class AppService {
  async run(code) {
    let data;
      fs.writeFile('script.py', code.code, function (err) {
        if (err) return console.log(err);
      });
      PythonShell.run('script.py', null, function (err, results) {
        console.log('results  : ' + results);
        data = results;
      });
      await sleep(1000);
      console.log('data : ' + data);
    return {
    result :  data
    };
  }
}