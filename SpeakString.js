// JavaScript source code

function speakString(str,speakerNum,speakStringJSON) {
    var stringArray = speakStringJSON[speakerNum];
    if(!stringArray){
        return str;
    }
    else{
        str = stringArray[Math.floor(Math.random() * stringArray.length)]
        return str;
    }
}