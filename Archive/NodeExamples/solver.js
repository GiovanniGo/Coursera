var quad = require('./quadratic.js');
var prompt = require('prompt');

prompt.get(['a', 'b', 'c'], function(err, result) {
    if (err) { return onErr(err); }

    console.log('Command-line input received:');
    console.log('a: ' + result.a);
    console.log('b: ' + result.b);
    console.log('c: ' + result.c);

    quad(result.a, result.b, result.c, function(err, quadsolve) {
        err ? console.log(err) :
            console.log("Roots are " + quadsolve.root1() + " " + quadsolve.root2());
    });
});