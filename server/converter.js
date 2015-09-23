var myNumber = require('./random');

var dollarOutput = toUSD(myNumber.newNumCall());



function toUSD(number) {
    var number = number.toString(),
        dollars = number.split('.')[0],
        cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    var x = '$' + dollars + '.' + cents.slice(0, 2);
    return x;
}

exports.newDollarAmount = dollarOutput;