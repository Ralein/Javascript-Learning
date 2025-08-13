var purchase1={
    shoes:100,
    stateTax:1.2,

totalPrice: function() {
    var calculate = purchase1.shoes * purchase1.stateTax;
    console.log('Total price:', calculate);
}
}
purchase1.totalPrice();
