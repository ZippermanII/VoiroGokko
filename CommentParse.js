function commentParse(comment,speaker){
    this.speakerName = null;
    this.artist = "";
    this.artSeries = "";
    this.dress = "a";
    this.emotion = null;
    this.talkStr = comment;
    this.command = null;
    var baseCommandStart = comment.lastIndexOf("##");
    var artists =["MtU","blueberry","ふらすこ","えとのーと","ペテン師","こーすけさんたまりあ"];
    if(baseCommandStart != -1){
        this.talkStr = comment.slice(0,baseCommandStart);
        this.command = comment.slice(baseCommandStart + 2 , comment.length);
        var commandLastChara = this.command.slice(-1);
        var block1start = 0;
        var block2start = 0;
        var block3start = this.command.length - 3;
        var block4start = this.command.length;
        if(!this.command.match(/[^0-9]/gi)){
            this.emotion = this.command;
            return;
        }
        else if (!commandLastChara.match(/[^A-Z]/)) {
            block3start -= 1;
            block4start -= 1;
            this.dress = commandLastChara;
        }
        for(key in speaker){
            if(this.command.startsWith(key)){
                this.speakerName = key;
                block2start = key.length;
                this.artist = this.command.slice(key.length, block3start);
                this.artSeries = this.command.slice(block3start, block4start);
                console.log(this.command);
                console.log(key);
                if (this.command == key) {
                    this.artist = artists[ Math.floor( Math.random() * artists.length ) ] ;
                    this.artSeries = "000";           
                }
                break;
            }
    }
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