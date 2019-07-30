// add solution here

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instruments[i]
    emptyArray.push(sentence)
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var johnLennonArray = []
  var i = 0
  while (i < facts.length) {
    johnLennonArray.push(facts[i]+"!!!")
    i++
  }
  return johnLennonArray
}

function iLoveTheBeatles(num) {
  var emptyArray = []
  
}