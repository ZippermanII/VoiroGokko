function Subtitles(talkStr,canvas){ 
	// var TalkStr = new Object(); 
	var Canvas = new Object();
    var TalkStr = talkStr;
    Canvas = {};
    Canvas['TxtSize'] = "120";
    Canvas['TxtColor'] = "ffffff";
    Canvas['TxtEdgeColor'] = "b99ee8";
    Canvas['TxtFont'] = "serif";
    Canvas['TxtUpSpace'] = "8";
    Canvas['TxtLeftSpace'] = "15";
    Canvas['TxtLength'] = "1320";
    Canvas['TxtLengthValue'] = "（ｒｙ";
    Canvas['TxtEdgeValue'] = "15";
    Canvas['TxtEdgeType'] = "1";
    // Canvas[''] = ;
    // Canvas[''] = ;
    // Canvas[''] = ;


    
	//余白
	this.upSpace = Canvas['TxtUpSpace'];
	this.leftSpace = Canvas['TxtLeftSpace'];
    //テキスト
    this.textcomment = new createjs.Text("", Canvas['TxtSize']+"px "+ "bold" + Canvas['TxtFont'], "#"+Canvas['TxtColor']);
	for (i=0; i<talkStr.length; i++) {
		this.textcomment.text = this.textcomment.text + talkStr.substring(i,i+1);
		if(Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['TxtLeftSpace'])) > Number(Canvas['TxtLength'])) {
			//console.log(Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['TxtLeftSpace'])));
			if(Canvas['TxtLengthValue'].trim() != "") {
				this.textcomment.text = 
				  this.textcomment.text.substr(0, (this.textcomment.text.length-Canvas['TxtLengthValue'].trim().length))
				 + Canvas['TxtLengthValue'].trim();
			}
			break;
		}
	}
	this.textcomment.x = 960;
	this.textcomment.y = 0;
	// this.textcomment.y = Number(Canvas['TxtUpSpace']) + HcgFormat['SkinHeight']*(HcgFormat['CommentMax']-1);
	this.textedgecomment = new createjs.Text(this.textcomment.text, Canvas['TxtSize']+"px "+ "bold" + Canvas['TxtFont'], "#"+Canvas['TxtEdgeColor']);
	this.textedgecomment.x = 960;
	this.textedgecomment.y = 0;
	// this.textedgecomment.y = Number(Canvas['TxtUpSpace']) + HcgFormat['SkinHeight']*(HcgFormat['CommentMax']-1);
	this.textedgecomment.outline = true;
	this.textedgecomment.outline = Number(Canvas['TxtEdgeValue']);
	if(Canvas['TxtEdgeType'] == 0) {
		this.textedgecomment.visible = false;
    }
}
Subtitles.prototype.getCommentText = function() {
    this.textcomment.textAlign = "center";
	return this.textcomment;
};
Subtitles.prototype.getEdgeCommentText = function() {
    this.textedgecomment.textAlign = "center";
	return this.textedgecomment;
};