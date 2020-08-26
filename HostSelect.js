function HostSelect(){
    var hostURL = "";
    var testServer = confirm("テストサーバーに接続しますか？");
    if(testServer){
        hostURL = "http://localhost/";
        console.log("yes");
    }
    else{
        hostURL = "http://localhost:7180/app/";
        console.log("no");
    }
    return hostURL;
}