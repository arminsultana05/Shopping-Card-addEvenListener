// Handle case increas decrease events.... 
document.getElementById('case-plus').addEventListener('click', function() {
    updateCase('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {

    updateCase('case', 59, false);
});
// Handle phone increas decrease event.....
document.getElementById('phone-plus').addEventListener('click', function() {
    updateCase('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateCase('phone', 1219, false);

});


function updateCase(products, price, inCreasing) {
    const caseInput = document.getElementById(products + '-number');
    let caseNumber = caseInput.value;
    if (inCreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;

    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(products + '-total');
    caseTotal.innerText = caseNumber * price;



}