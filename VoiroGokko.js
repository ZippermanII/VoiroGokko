// JavaScript source code

function Tachie(Command) {
    //�X�L�������ݒ�
    var command = Command;
    var y = 0; 
    this.skinimage = new createjs.Bitmap();//��摜
    this.skinloader = new createjs.ImageLoader('http://localhost/skins/' + command + '.png', false);
    this.skinloader.addEventListener("complete", (function (event) {
        this.skinimage.image = new createjs.Bitmap(event.result).image;
        console.log("���X�i�[�w��Skin�摜�t�@�C���ǂݍ���");
    }).bind(this), false);//����
    this.skinloader.load();//����
};
Tachie.prototype.getSkinImage = function () {
    console.log("inside prototype.getSkinImage");
    return this.skinimage;
};