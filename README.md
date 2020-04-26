# m3u8 Downloader (m3u8文件下载器)

本项目fork自：[m3u8Downloader](https://github.com/JohnnieFucker/m3u8Downloader.git)，但发现之前的项目实际上用的是单线程执行的，是假的多线程，也不稳定。所以采用了Node真正意义上的多线程来处理。

目前有以下特性：

 - 采用了Worker Thread
 - 采用了WorkerPool，支持自定义并发线程数量，示例采用：[Using AsyncResource for a Worker thread pool](https://nodejs.org/dist/latest-v12.x/docs/api/async_hooks.html#async-resource-worker-pool) ，并解决了当失败后不能重启任务的问题。
 - 网络请求框架变为axios
 - 支持参数化运行
 - 增加了下载进度条
 - 增加了已下载文件检测，避免重复下载
 - 重构了文件清理逻辑，支持unix与windows


> **Tip:** 在运行时，需要提前安装好***FFMPEG**环境，并设置好环境变量。

## How to use
```
const downloader = require('m3u8-multi-thread-downloader');

downloader.download({
    url: 'https://www.hkg.haokan333.com/201903/07/qM3F7ntN/800kb/hls/index.m3u8',
    processNum: 4, // 同时开启的线程数,线程不宜开的过多，否则容易造成资源无法正常下载的情况
    filePath: 'video', // 所存放的文件夹
    fileName: 'baby' // 视频资源的文件名
});
```

支持参数化的方式：
```
node  --experimental-worker .\download.js --url=https://www.hkg.haokan333.com/201903/07/qM3F7ntN/800kb/hls/index.m3u8 --path=video --name=baobaby --deleteTemp=false --process=8
```

支持的参数有:
```
--url 下载的m3u8文件路径
--process 下载的线程数，不宜过多，4个很稳定，取决于服务器的并发措施
--path 文件存放路径, 默认为：video
--name 文件合并后的名称, 谨慎使用非英文字符, 默认为：video
--deleteTemp 是否在处理完抽删除临时文件, 默认为: true
```

下载时的进度展示：
```
  Downloading:97% [=================================================================================================---]  Current:101 Total:104 当前用时:54.2s 剩余时长:1.6
```

完整的运行日志：
```
node  --experimental-worker .\download.js --url=https://www.hkg.haokan333.com/201903/07/qM3F7ntN/800kb/hls/index.m3u8 --path=video2 --name=baobaby --deleteTemp=false --process=8
已初始化线程池，线程数量为: 8
开始解析m3u8文件...
解析成功，开始下载...
  Downloading:100% [====================================================================================================]  Current:104 Total:104 当前用时:0.0s 剩余时长:0.0s
正在合并ts为mp4...
1. FFMPEG mp4 0处理完成.
2. FFMPEG mp4 1处理完成.
所有FFMPEG处理完成.
```

----
希望可以帮助大家下载到喜欢的资源，有问题可以联系我:sahadev@foxmail.com \^-^