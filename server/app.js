var http = require('http');
var toConvert = require('./random');
var isConverting = require('./converter');
var finalAccount = require('./account');

http.createServer(function(req, res){
    res.writeHead(200);
    //res.write('Hello World');
    //res.write(toConvert.newNumCall);
    //res.write(isConverting.newDollarAmount);
    res.write(finalAccount.message());
    res.write(finalAccount.balance());
    res.end();
}).listen(3000);

console.log('Listening in on port 3000');

