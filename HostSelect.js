function HostSelect(selfURL){
    var hostURL = "";
    var testServer = confirm(selfURL + "テストサーバーに接続しますか？");
    if(testServer){
        hostURL = "http://localhost/";
        console.log("connect to http://localhost/");
    }
    else{
        hostURL = "http://localhost:7180/app/";
        console.log("connect to http://localhost:7180/app/");
    }
    return hostURL;
}