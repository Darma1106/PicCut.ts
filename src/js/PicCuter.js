export class PicCutter{
    canvas;
    img;
    ctx;
    constructor(canvas,img){
        this.canvas = canvas;
        this.img = img;
    }
    createCanvas(Cwidth = 200,Cheight = 200){
        //Cwidth，新图宽度,Cheight，新图高度
        this.canvas.width = Cwidth;
        this.canvas.height = Cheight;
        this.ctx = this.canvas.getContext('2d');
    }
    cutPicture(num = 3){
        //把图片分割成 num x num个小图
        let picArr = [];
        //将画布循环输出每一块
        for(let i=0;i<num;i++){
            for(let j=0;j<num;j++){
            this.ctx.drawImage(this.img, j*this.img.width/num, i*this.img.height/num,this.img.width/num,this.img.height/num,0,0,this.ctx.canvas.width,this.ctx.canvas.height);
            picArr.push(this.canvas.toDataURL("image/png"));
            }
        }
        return picArr;
    }
    showpic(pic){
        //将图片添加到网页中
        pic.forEach(element => {
            let image = new Image();
            image.src = element;
            document.body.appendChild(image);
        });
    }
}