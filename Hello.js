var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(cowsay.say({
    text : Quote.getRandomQuote() ,
    e : "oO",
    T : "U "
}));

// or cowsay.think()