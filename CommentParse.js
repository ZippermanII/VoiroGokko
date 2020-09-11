function commentParse(comment,speaker,index){
    this.speakerName = null;
    this.artist = "";
    this.artSeries = "series000";
    this.dress = "a";
    this.emotion = null;
    this.talkStr = comment;
    this.command = null;
    var baseCommandStart = comment.lastIndexOf("##");
    var artists =[];
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
}
// function commentParse(comment,speaker,index){
//     this.speakerName = null;
//     this.artist = "";
//     this.artSeries = "";
//     this.dress = "a";
//     this.emotion = null;
//     this.talkStr = comment;
//     this.command = null;
//     var baseCommandStart = comment.lastIndexOf("##");
//     var artists =[];
//     if(baseCommandStart != -1){
//         this.talkStr = comment.slice(0,baseCommandStart);
//         this.command = comment.slice(baseCommandStart + 2 , comment.length);
//         var commandLastChara = this.command.slice(-1);
//         var block1start = 0;
//         var block2start = 0;
//         var block3start = this.command.length - 3;
//         var block4start = this.command.length;
//         if(!this.command.match(/[^0-9]/gi)){
//             this.emotion = this.command;
//             return;
//         }
//         else if (!commandLastChara.match(/[^A-Z]/)) {//絵師名の最後がアルファベットだと不具合の恐れ要修正
//             block3start -= 1;
//             block4start -= 1;
//             this.dress = commandLastChara;
//         }
//         for(key in speaker){
//             if(this.command.startsWith(key)){
//                 this.speakerName = key;
//                 block2start = key.length;
//                 block2 = this.command.slice(block2start, block3start)
//                 console.log(block2);
//                 if(block2.match(/[^0-9]/gi)){
//                     this.artSeries = "series" + this.command.slice(block3start, block4start);
//                 }
//                 else{
//                     block2 = this.command.slice(block2start, block4start)
//                     this.artSeries = "series000"
//                 }
//                 this.artist = block2 + "様";
//                 if (this.command == key) {
//                     index = index.getElementsByTagName(key);
//                     index = Array.prototype.slice.call(index);
//                     index.forEach(element => {
//                         artists.push(element.parentNode.nodeName)
//                     });
//                     this.artist = artists[ Math.floor( Math.random() * artists.length ) ] ;
//                     this.artSeries = "series000";           
//                 }
//                 break;
//             }
//     }
//     }
// }
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