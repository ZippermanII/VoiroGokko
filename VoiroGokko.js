// JavaScript source code

function Tachie(Command) {
    //スキン初期設定
    var command = Command;
    var y = 0; 
    this.skinimage = new createjs.Bitmap();//空画像
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        console.log("リスナー指定Skin画像ファイル読み込み");
    }).bind(this), false);//注意
    this.skinloader.load();//注意
};
Tachie.prototype.getSkinImage = function () {
    console.log("inside prototype.getSkinImage");
    return this.skinimage;
};