function Subtitles(talkStr,sentenceEdgeColor){ 
	console.log("");
	// var TalkStr = new Object(); 
	var Canvas = new Object();
    Canvas = {};
    Canvas['sentenceSize'] = 160;
    Canvas['sentenceColor'] = "ffffff";
    Canvas['sentenceEdgeColor'] = "000000";
    Canvas['sentenceFont'] = "Umeboshi";
    Canvas['sentenceUpSpace'] = "30";
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
	var minFontSize = 80;
	var sentenceMaxLength = 1320;
	var additionalwidth = 170;
	this.textcomment.font = 'bold ' + String(fontsize) + "px " + 'Umeboshi';
	this.textcomment.lineHeight = 80;
	var sentenceWidth;
	for (i=0; i<talkStr.length; i++) {
		this.textcomment.text = this.textcomment.text + talkStr.substring(i,i+1);
		sentenceWidth = Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace']));
		if(sentenceWidth <= sentenceMaxLength){
			console.log(sentenceWidth);
			continue;
		}
		else if((sentenceWidth > sentenceMaxLength)&&(fontsize > minFontSize)) {
			console.log("wid > max");
			//console.log(Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace'])));
			fontsize -= 10;
			this.textcomment.font = 'bold ' + String(fontsize)+ "px " + 'Umeboshi';
			console.log(this.textcomment.font);
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
			sentenceMaxLength *= 2.1;
			for (let index = i; index < talkStr.length; index++) {
				sentenceWidth = Number(Number(this.textcomment.getMeasuredWidth())+Number(Canvas['sentenceLeftSpace']));
				if (sentenceWidth <= sentenceMaxLength) {
					console.log("sentenceWdth = " + sentenceWidth);
					console.log("sentenceMaxLength = " + sentenceMaxLength);
					this.textcomment.text = this.textcomment.text + talkStr.substring(index,index+1);			
				}
				else{
					console.log("sentenceWdth = " + sentenceWidth);
					this.textcomment.text = 
						this.textcomment.text.substr(0, index - Canvas['sentenceLengthValue'].length +1)
						+ Canvas['sentenceLengthValue'].trim();
					break;
				}
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
	this.textedgecomment.lineHeight = 80;
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