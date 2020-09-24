function commentParse(comment,speaker,index,isMaster){
    this.speakerName = null;
    this.artist = "";
    this.artSeries = "series000";
    this.dress = "a";
    this.emotion = null;
    this.talkStr = comment;
    this.command = null;
    var lastChara = comment[comment.length - 1]
    if(isMaster){
        if (lastChara == "。"){
            this.talkStr = this.talkStr.replace(/\s+/g, "");
            this.talkStr = this.talkStr.slice(0,comment.length - 1);
            lastChara = this.talkStr[this.talkStr.length - 1];
        }
        console.log("comment = " + comment);
        if(this.talkStr.endsWith("かな")){
            this.talkStr +=  "？";
        }
    }
    // this.talkStr = this.talkStr.replace(/<u>.*<\/u>/g, ''); //ニコニコのURLを受け取った際に付与されているhtmlタグを除去しようと思った
    this.talkStr = this.talkStr.replace(/http(s)?\:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=~]*)?/g, 'URLです');
    var baseCommandStart = comment.lastIndexOf("##");
    var artists =[];
    var randomEmote = ["000","004"];
    if(baseCommandStart != -1){
        this.talkStr = comment.slice(0,baseCommandStart);
        this.command = comment.slice(baseCommandStart + 2 , comment.length);
        var commandArray = this.command.split('#');
        if(!this.command.match(/[^0-9]/gi)){
            this.emotion = this.command;
            return;
        }
        for(key in speaker){
            if(commandArray[0] == key){
                this.speakerName = key;
                if(commandArray[1]){
                    this.artist = commandArray[1] + "様";
                }
                else{
                    index = index.getElementsByTagName(key);
                    index = Array.prototype.slice.call(index);
                    index.forEach(element => {
                        artists.push(element.parentNode.nodeName)
                    });
                    this.artist = artists[ Math.floor( Math.random() * artists.length ) ];
                }
                if(commandArray[2]){
                    this.artSeries = "series" + commandArray[2];
                }
                if(commandArray[3]){
                    this.dress = commandArray[3]
                }
                break;
            }
        }
    }
    else if(lastChara == "ｗ"||lastChara == "草"||lastChara == "w"){//これもっとスマートな書き方ないだろうか
        this.command = "001";
        this.emotion = "001";
        return;
    }
    else{
        this.emotion = randomEmote[ Math.floor( Math.random() * 2 ) ];
        this.command = this.emotion;
        return;
    }
}
commentParse.prototype.getSpeakerName = function () {
    return this.speakerName;
};
commentParse.prototype.getArtist = function () {
    return this.artist;
};
commentParse.prototype.getArtSeries = function () {
    return this.artSeries;
};
commentParse.prototype.getDress = function () {
    return this.dress;
};
commentParse.prototype.getEmotion = function () {
    return this.emotion;
};
commentParse.prototype.getTalkStr = function () {
    return this.talkStr;
};
commentParse.prototype.getCommand = function () {
    return this.command;
};