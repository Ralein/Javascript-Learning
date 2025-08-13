var currencyOne = 100;
var currancytwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount,rate){
    return amount*rate;
}
currancytwo = convertCurrency(currencyOne,exchangeRate);
console.log(currancytwo);