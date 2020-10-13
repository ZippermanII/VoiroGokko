// JavaScript source code

function speakString(str,speakerNum,speakStringJSON) {    
    if (speakerNum == "2002"){
        var kiritanReplace = {"じゃん":"じょん","ジャン":"ジョン"};
        Object.keys(kiritanReplace).forEach(element => {
            if (str.match(new RegExp(element, 'gi'))) {
                var replaceTarget = element;
                var replaceStr = kiritanReplace[element];
                str = str.replace(new RegExp(replaceTarget, 'gi'), replaceStr); 
                console.log("######################  " + str);
                return str;
            }
        });
        // if(str.match(/じゃん/gi)){
        //     var replaceTarget = "じゃん";
        //     var replaceStr = "じょん";
        //     str = str.replace(new RegExp(replaceTarget, 'gi'), replaceStr); 
        //     console.log("######################  " + str);
        //     return str;
        // }
    }
    var stringArray = speakStringJSON[speakerNum];
    if(!stringArray){
        return str;
    }
    else{
        str = stringArray[Math.floor(Math.random() * stringArray.length)]
        return str;
    }
}