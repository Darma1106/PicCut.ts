# PicCut.Js
用JS做图像分割
# PicCuter.Js
先import {PicCutter} from 'path/to/PicCuter.js';
# 实例化PicCuter(canvas,img)
需要传入两个el canvas(画布)和img(原图),建议设置隐藏 display: none;
# PicCuter.createCanvas(Cwidth,Cheight)
设置小图的长宽默认为200x200
# PicCuter.cutPicture(num)
会把原图切割成num x num个小图 默认为3即九宫格,返回值为所有小图的图片src数组