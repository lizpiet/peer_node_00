
var newNum = function(){

    return randomNum(100, 10000);
};


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.newNumCall=newNum;

