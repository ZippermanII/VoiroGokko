// JavaScript source code

function Tachie(Command) {
    //ƒXƒLƒ“‰Šúİ’è
    var command = Command;
    var y = 0; 
    this.skinimage = new createjs.Bitmap();//‹ó‰æ‘œ
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
    }).bind(this), false);//’ˆÓ
    this.skinloader.load();//’ˆÓ
};
Tachie.prototype.getSkinImage = function () {
    return this.skinimage;
};