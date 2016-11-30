
var en = require('./en');
var es = require('./es');

function greet(lang) {

    if (lang === 'en') {
        en();
        return;
    }
     if (lang === 'es') {
         es();
        return; 
    }
    
     console.log('....');
}
// greet();

module.exports = greet;