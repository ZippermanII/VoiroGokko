// JavaScript source code

function TachieLoader(Command) {
    //�X�L�������ݒ�
    var command = Command;
    var y = 0; 
    var width = 0;
    this.skinimage = new createjs.Bitmap();//��摜
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        //console.log(this.skinimage.image.width);
    }).bind(this), false);//����
    this.skinloader.load();//����
};
TachieLoader.prototype.getSkinImage = function () {
    return this.skinimage;
};