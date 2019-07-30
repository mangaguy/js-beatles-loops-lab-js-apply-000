// add solution here
var emptyArray = [];


function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < musicians.length; i++) {
      var sentence = musicians[i] + " plays " + instruments[i]
      emptyArray.push(sentence)
    }
    return emptyArray
}