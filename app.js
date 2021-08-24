function updateNumber(product, price, isIncrease){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product balance
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate Total Amount 
    calculateTotalAmount();
};
// get input and convert
function getInputValue(product){
    // const phoneInput = document.getElementById('phone-number').value;
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

// calculateTotalAmount
function calculateTotalAmount(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update in the html file
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
};

// handle phone incrase and decrease evennts
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', 1219, false);
});

// handle case increase and decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59, false);
});