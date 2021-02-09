(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i= 0 ; i < names.length ; i++){
    var firstLetter = names[i].charAt(0).toLowerCase();
    console.log(firstLetter);
    if(firstLetter == "j"){
      byeSpeaker.speaker(names[i]);
    }else{
      helloSpeaker.speaker(names[i]);
    }
  }
})();

