document.getElementById('case-plus').addEventListener('click', function() {
    updateCase(true);



})
document.getElementById('case-minus').addEventListener('click', function() {

    updateCase(false);


})

function updateCase(inCreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (inCreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;

    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59



}