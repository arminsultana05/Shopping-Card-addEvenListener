// Handle case increas decrease events.... 
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductsNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {

    updateProductsNumber('case', 59, false);
});
// Handle phone increas decrease event.....
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductsNumber('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductsNumber('phone', 1219, false);

});

function updateProductsNumber(products, price, inCreasing) {
    const caseInput = document.getElementById(products + '-number');
    let productNumber = caseInput.value;
    if (inCreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    caseInput.value = productNumber;
    const productTotal = document.getElementById(products + '-total');
    productTotal.innerText = productNumber * price;

    calculatee();

}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculatee() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalPrice;


};