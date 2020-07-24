// JavaScript source code

class Canvases {

    constructor() {
        this.layer = 10000;
    }

    //左右反転しなくなった場合はここを要チェックlistに追加しなければならない要素がある可能性
    StyleDeclarationSetTransform(style, value) {
    var list = [
        "transform",
        "webkitTransform",
        "MozTransform",
        "msTransform",
        "OTransform"
    ];
    var i;
    var num = list.length;
    for (i = 0; i < num; i++) {
        if (style[list[i]] !== undefined) {
            style[list[i]] = value;
            return true;
        }
    }
        return false;
}

    //新規キャンバスを作成
    create(userId, availablePosition) {
        var newCanvas = document.createElement("canvas");
        var style = newCanvas.style;
        newCanvas.setAttribute("data-position", availablePosition);
        newCanvas.id = userId;
        newCanvas.width = 400;
        newCanvas.height = 1080;
        newCanvas.style.position = "absolute";
        newCanvas.style.zIndex = 10000 - availablePosition;
        //ポジションにあわせて描画位置を調整
        if (availablePosition % 2 == 1) {
            newCanvas.style.left = "1600px";
        }
        else {
            newCanvas.style.left = "-90px";
            //共通フォーマットが左向きなので画面右にくる画像は左右反転
            this.StyleDeclarationSetTransform(style, "scale(-1.0,1.0)");
        }
        var top = 0;
        if (availablePosition < 2) {
            top += 600;
            newCanvas.style.top = top + "px";
        }
        else if (availablePosition < 4) {
            top += 300;
            newCanvas.style.top = top + "px";
        }
        else {
            top -= 50;
            newCanvas.style.top = top + "px";
        }
        return newCanvas;
    }

    //キャンバスを削除
    Delete() {

    }

}