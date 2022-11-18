const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');

console.log(cowsay.say({
    text: Quote.getRandomQuote(),   
    e : "OO",
    T : "U "
}));

// or cowsay.think()