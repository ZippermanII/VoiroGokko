﻿// JavaScript source code

function tachieLoader(Command,canvas_width) {
    //スキン初期設定
    var command = Command;
    var scaling = 1;
    this.skinimage = new createjs.Bitmap();//空画像
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        scaling = canvas_width / this.skinimage.image.naturalWidth;
        this.skinimage.scaleX = scaling;
        this.skinimage.scaleY = scaling; 
        //console.log(this.skinimage.image.width);
    }).bind(this), false);//注意
    this.skinloader.load();//注意
};
tachieLoader.prototype.getSkinImage = function (width) {
    return this.skinimage;
};