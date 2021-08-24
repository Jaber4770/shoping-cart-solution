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