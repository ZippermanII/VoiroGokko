// JavaScript source code

function Tachie(Command) {
    //�X�L�������ݒ�
    var command = Command;
    var y = 0; 
    this.skinimage = new createjs.Bitmap();//��摜
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
    }).bind(this), false);//����
    this.skinloader.load();//����
};
Tachie.prototype.getSkinImage = function () {
    return this.skinimage;
};