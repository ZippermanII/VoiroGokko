// JavaScript source code

class Canvases {

    //新規キャンバスを作成
    Create(user_id) {
        var new_canvas = document.createElement("canvas");
        new_canvas.id = user_id;
        return new_canvas;
    }

    //キャンバスを削除
    Delete() {

    }

}