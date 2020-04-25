const {
  parentPort
} = require('worker_threads');

const request = require('request');
const fs = require('fs');


parentPort.on('message', (task) => {
  const tsObj = task;
  utils.log(`start download ts${tsObj.index}`);
  const opt = {
    method: 'GET',
    url: tsObj.url,
    timeout: 100000,
    headers: {
      'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'
    },
    encoding: null
  };
  request(opt, (error, response, buff) => {
    if (error) {
      utils.logError(`download failed ts${tsObj.index}error:${error.message}`);
      parentPort.postMessage(null);
    } else if (response.statusCode === 200) {
      fs.writeFile(tsObj.file, buff, (error2) => {
        if (error2) {
          utils.logError(`download failed ts${tsObj.index} error:${error2.message}`);
          parentPort.postMessage(null);
        } else {
          parentPort.postMessage(index + processNum);
        }
      });
    }
  });
});