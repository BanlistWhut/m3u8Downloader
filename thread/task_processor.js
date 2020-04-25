const { parentPort } = require('worker_threads');
parentPort.on('message', (task) => {
  parentPort.postMessage(task.a + task.b);
});

function downloadTs(index) {
    if (index >= tsCount) {
        return;
    }
    const tsObj = tsList[index];
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
            downloadTs(index);
        } else if (response.statusCode === 200) {
            fs.writeFile(tsObj.file, buff, (error2) => {
                if (error2) {
                    utils.logError(`download failed ts${tsObj.index} error:${error2.message}`);
                    downloadTs(index);
                } else {
                    downloadedNum++;
                    utils.log(`download ts${tsObj.index} sucess,downloaded ${downloadedNum}/remain${tsCount - downloadedNum}`);
                    checkIfDone();
                    downloadTs(index + processNum);
                }
            });
        }
    });
}