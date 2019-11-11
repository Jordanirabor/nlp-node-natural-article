var natural = require('natural');
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");

// getSentiment expects an array of strings
console.log(analyzer.getSentiment(["I", "don't", "want", "to", "play", "with", "you"]));