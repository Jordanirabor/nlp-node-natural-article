var natural = require('natural');

var classifier = new natural.BayesClassifier();

classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the q\'s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();


console.log(classifier.classify('i am short silver'));
console.log(classifier.classify('i am long copper'));