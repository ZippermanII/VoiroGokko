function Subtitles(talkStr,sentenceEdgeColor){ 
	// var TalkStr = new Object(); 
	var Canvas = new Object();
    Canvas = {};
    Canvas['sentenceSize'] = 160;
    Canvas['sentenceColor'] = "ffffff";
    Canvas['sentenceEdgeColor'] = "000000";
    Canvas['sentenceFont'] = "Umeboshi";
    Canvas['sentenceUpSpace'] = "8";
    Canvas['sentenceLeftSpace'] = "15";
    Canvas['sentenceLength'] = "1320";
    Canvas['sentenceLengthValue'] = "（ｒｙ";
    Canvas['sentenceEdgeValue'] = "15";
    Canvas['sentenceEdgeType'] = "1";
    // Canvas[''] = ;
    // Canvas[''] = ;
    // Canvas[''] = ;


    
	//余白
	this.upSpace = Canvas['sentenceUpSpace'];
	this.leftSpace = Canvas['sentenceLeftSpace'];
	//テキスト
	console.log(Canvas['sentenceFont']);
	console.log(Canvas['sentenceSize']);
	this.textcomment = new createjs.Text("", String(Canvas['sentenceSize']) +"px "+ "bold " + Canvas['sentenceFont'], "#"+ Canvas['sentenceColor']);
	//ここで改めてフォントを指定しないとなぜか変わってくれない
	var fontsize = 160;
	var minFontSize = 50;
	this.textcomment.font = 'bold ' + String(fontsize) + "px " + 'Umeboshi';
	var sentenceWidth;
	for (i=0; i<talkStr.length; i++) {
		this.textcomment.text = this.textcomment.text + talkStr.substring(i,i+1);
		sentenceWidth = Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace']));
		if(sentenceWidth < Number(Canvas['sentenceLength'])){
			continue;
		}
		else if((sentenceWidth > Number(Canvas['sentenceLength']))&&(fontsize > minFontSize)) {
			//console.log(Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace'])));
			fontsize -= 10;
			console.log(fontsize);
			this.textcomment.font = 'bold ' + String(fontsize)+ "px " + 'Umeboshi';
			this.textcomment.text = "";
			i = -1;
			continue;
			// if(Canvas['sentenceLengthValue'].trim() != "") {
			// 	this.textcomment.text = 
			// 	  this.textcomment.text.substr(0, (this.textcomment.text.length-Canvas['sentenceLengthValue'].trim().length))
			// 	 + Canvas['sentenceLengthValue'].trim();
			// }
			// break;
		}
		else{
			console.log("else");
			this.textcomment.text = this.textcomment.text + '\r';
			i += 1;
			for (let index = i; index < talkStr.length; index++) {
				this.textcomment.text = this.textcomment.text + talkStr.substring(index,index+1);				
			}
			break;
		}
	}
	// sentenceWidth = Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace']));
	// while (sentenceWidth > Number(Canvas['sentenceLength'])) {
	// 	if ( fontsize < 60) {
	// 		break;
	// 	}
	// 	fontsize -= 10;
	// 	this.textcomment.font = 'bold ' + String(fontsize) + "px " + 'Umeboshi';
	//  	sentenceWidth = Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace']));
	// 	console.log(sentenceWidth);
	// }
	this.textcomment.x = 960;
	this.textcomment.y = 10;
	// this.textcomment.y = Number(Canvas['sentenceUpSpace']) + HcgFormat['SkinHeight']*(HcgFormat['CommentMax']-1);
	this.textedgecomment = new createjs.Text(this.textcomment.text, String(Canvas['sentenceSize']) +"px "+ "bold " + Canvas['sentenceFont'], "#"+sentenceEdgeColor);
	this.textedgecomment.font = 'bold ' + String(fontsize) + "px " + 'Umeboshi';
	this.textedgecomment.x = 960;
	this.textedgecomment.y = 10;
	// this.textedgecomment.y = Number(Canvas['sentenceUpSpace']) + HcgFormat['SkinHeight']*(HcgFormat['CommentMax']-1);
	this.textedgecomment.outline = true;
	this.textedgecomment.outline = Number(Canvas['sentenceEdgeValue']);
	if(Canvas['sentenceEdgeType'] == 0) {
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