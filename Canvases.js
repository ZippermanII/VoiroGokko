// JavaScript source code

class Canvases {

    constructor() {
        this.layer = 10000;
    }

    //新規キャンバスを作成
    Create(user_id, canvas_count) {
        var new_canvas = document.createElement("canvas");
        var ctx = new_canvas.getContext("2d");
        new_canvas.setAttribute("data-position", canvas_count);
        new_canvas.id = user_id;
        new_canvas.width = 1920;
        new_canvas.height = 1080;
        new_canvas.style.position = "absolute";
        new_canvas.style.zIndex = this.layer;
        ctx.scale(-1, 1);
        //ポジションにあわせて描画位置を調整
        if (canvas_count % 2 == 1) {
            console.log("canvas_count % 2 == 1");
            new_canvas.style.left = "1560px";
        }
        else {
            new_canvas.style.left = "-100px";
        }
        var top = 0;
        if (canvas_count < 2) {
            top += 600;
            new_canvas.style.top = top + "px";
        }
        else if (canvas_count < 4) {
            top += 300;
            new_canvas.style.top = top + "px";
        }
        this.layer -= 1;
        return new_canvas;
    }

    //キャンバスを削除
    Delete() {

    }

}