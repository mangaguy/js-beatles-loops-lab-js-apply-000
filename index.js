// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instruments[i]
    emptyArray.push(sentence)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var johnLennonArray = [];
  while (i < facts.length) {
    var i = 0
    johnLennonArray.push(facts[i]+"!!!")
    i++
  }
  return johnLennonArray
}
