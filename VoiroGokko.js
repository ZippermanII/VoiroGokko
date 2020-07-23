// JavaScript source code

function tachieLoader(fixedCommand,canvasWidth) {
    //スキン初期設定
    var scaling = 1;
    this.success = false;
    this.skinimage = new createjs.Bitmap();//空画像
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + fixedCommand + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.success = true;
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        scaling = canvasWidth / this.skinimage.image.naturalWidth;
        this.skinimage.scaleX = scaling;
        this.skinimage.scaleY = scaling; 
    }).bind(this), false);//注意
    this.skinloader.load();//注意
};
tachieLoader.prototype.getSkinImage = function () {
    return this.skinimage;
};
tachieLoader.prototype.success = function () {
    return this.success;
};