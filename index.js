// add solution here
var emptyArray = [];


function theBeatlesPlay(musicians, instruments) {
    var sentence
    for (i = 0; i < musicians.length; i++) {
      sentence = musicians[i] + " plays " + instruments[i]
      emptyArray.push(sentence)
    }
    return emptyArray
}