// JavaScript source code

function tachieLoader(fixedCommand,canvas,hostURL) {
    //読み込み画像サイズと表示位置の調整、20200801時点ではhtml上で呼び出す
    //キャンバスがwidth=500pxの時にのみしっくりくるように調整されている
    var scaling = 1;
    var adjustForSdChara = 1;
    this.complete = false;
    this.skinimage = new createjs.Bitmap();//空画像
    this.skinloader = new createjs.ImageLoader(hostURL + 'skins/' + fixedCommand + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.complete = true;
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        adjustForSdChara = this.skinimage.image.naturalWidth / this.skinimage.image.naturalHeight / 2 + 1;
        if (adjustForSdChara < 1) {
            adjustForSdChara = 1;
            this.skinimage.x = 80;
            this.skinimage.y = -20;
        }
        scaling = canvas.width / this.skinimage.image.naturalWidth * adjustForSdChara;
        this.skinimage.x += -1 * (Math.pow(adjustForSdChara,2.5)) * 60;
        this.skinimage.y += (Math.pow(adjustForSdChara,2.5)) * 15;
        this.skinimage.scaleX = scaling;
        this.skinimage.scaleY = scaling; 
    }).bind(this), false);//注意
    this.skinloader.load();//注意
}
tachieLoader.prototype.getSkinImage = function () {
    return this.skinimage;
};
tachieLoader.prototype.adjustForSdChara = function () {
    return this.adjustForSdChara;
};
tachieLoader.prototype.complete = function () {
    return this.complete;
};