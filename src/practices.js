var string1 = 'ace'
var string2 = 'bd'

var novaString = ""
var aux = ""

for (var i = 0; i < string1.length; i++) {
    novaString = novaString + (string1[i] + (string2[i] || " "))
    console.log("Nova string:" + novaString)
 }
 
 console.log(novaString)