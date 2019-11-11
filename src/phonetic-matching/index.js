var natural = require('natural');
var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;

var wordA = 'phonetics';
var wordB = 'fonetix';

if (metaphone.compare(wordA, wordB))
    console.log('They sound alike!');

// We can aso obtain the raw phonetics of a word using process()
console.log(metaphone.process('phonetics'));