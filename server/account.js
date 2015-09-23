var finalVar = require('./converter');

var accBalance = function(){
    return "Account Balance:";
};

var newBalance = function(){
    return finalVar.newDollarAmount;
};

exports.message=accBalance;
exports.balance =newBalance;