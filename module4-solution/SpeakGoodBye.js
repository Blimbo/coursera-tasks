(function(window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    сonsole.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
