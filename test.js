/**
 * Intro:
 * Date:2019-09-20
 *
 * "Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein
 *
 *                      。
 *      。               ~!,
 *     ~*                ~*@:
 *    !=-                ~:#@
 *   .@;~                  @#
 *    #&  ...~;=&&&&&&&=!~,
 *      ,:%%&!:~~~~~::;!*&%%@#,
 *     .@@~                  !@
 *     &@#                .~&&
 *     #@#-.          &%%@&=!   #@@~     =@#;
 *     .=@@@#&&*!!!;;:~.        @@@.     ,@
 *        -:;!!*=&%%@@@@@*     ~@@;
 *                    ,:@@#    &@@&@&* :&#@#. %%       .!%%*.
 *        -%%-          @@&   .@@!&@@!  *@@-  @@@@@@@ ,@@  @@
 *        ,&@=       ~*&#:    -@& @@=   &@*  .@@~ @@* :@@&@@@：
 *          .;=%%#&*:,..      =@  @@.   @@   ;@=  @@  ~@         *:#。
 *                            @. .@=    @-   &@   @.   @@@@@      .:*#@@@@@&*;-
 *                           ,#  #@:                                          &#~
 *                               @@:                                           *#~
 *                               *@;                              .!          *#~
 *                                @#                           .-&#@@@@@@@%%&~
 *                                 !~                        ~;!&%%.
 *
 */
const downloader = require('./index');

downloader.download({
    url: 'https://yun.kubozy-youku-163.com/20190709/16666_5a9c65b6/1000k/hls/index.m3u8',
    processNum: 15,
    filePath: 'video'
    // fileName:'test'
});
// https://www.hkg.haokan333.com/201901/07/beZYX9Rh/800kb/hls/index.m3u8

