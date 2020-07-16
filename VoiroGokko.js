// JavaScript source code

function TachieLoader(Command) {
    //スキン初期設定
    var command = Command;
    this.skinimage = new createjs.Bitmap();//空画像
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        //console.log(this.skinimage.image.width);
    }).bind(this), false);//注意
    this.skinloader.load();//注意
};
TachieLoader.prototype.getSkinImage = function () {
    return this.skinimage;
};