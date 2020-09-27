async function Comment(){
 console.log("hello");
 var hostURL = "http://localhost/";
 talkerEffectsJSON = await fetch(hostURL + 'ignore/talker_effects.json',{"method":"GET"});
 effectsJSON = await talkerEffectsJSON.json();
};