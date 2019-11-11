var natural = require('natural');
var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);

console.log(spellcheck.getCorrections('soemthing', 1)); // ['something']
console.log(spellcheck.getCorrections('soemthing', 2)); // ['something', 'soothing']


