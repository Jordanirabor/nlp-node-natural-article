var natural = require('natural');


console.log(natural.HammingDistance("karolin", "kathrin", false));
console.log(natural.HammingDistance("karolin", "kerstin", false));
// If strings differ in length -1 is returned
console.log(natural.HammingDistance("short string", "longer string", false));