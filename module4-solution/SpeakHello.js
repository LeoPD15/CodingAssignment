(function(window){
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speaker = function(name){
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

})(window);
