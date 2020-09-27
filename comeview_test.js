async function Comment(){
 console.log("hello");
 var hostURL = "http://localhost/";
 configJSON = await fetch(hostURL + 'ignore/config.json',{"method":"GET"});
 configJSON = await configJSON.json();
};