/**
 * Created by DaraW on 2016/2/12.
 */
var intro = document.querySelector('#intro');

var options = {
    isRandomSpeed: false,
    speed: 300
};
var typing = new Typing(intro, options);
typing.add(' 林晓炜.')
    .pause(1000)
    .delete(4)
    .add('水货程序猿.')
    .pause(1000)
    .delete(6)
    .add('全栈渣.')
    .pause(1000)
    .delete(4)
    .add('米兰粉.')
    .pause(1000)
    .delete(4)
    .add('大法粉.')
    .pause(1000)
    .delete(4)
    .add('伪BGM控.')
    .pause(1000)
    .delete(6)
    .add('非职业游戏吐槽.')
    .pause(1000);

