function getElement(id) {
    return document.getElementById(id);
}
const plusPhoneButton = getElement("phonePlus");
const minusPhoneButton = getElement("phoneMinus");
const plusCaseButton = getElement("casePlus");
const minusCaseButton = getElement("caseMinus");






plusPhoneButton.addEventListener('click', function () {
    const iphoneCount = getElement("iphoneInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    iphoneCountNum += 1;
    iphoneCount.value = iphoneCountNum;
    let iphoneValue = getElement("iphoneValue");
    let iphoneTotal = iphoneCountNum * 1219;
    iphoneValue.innerText = "$" + iphoneTotal;
    changeTotal();
})
minusPhoneButton.addEventListener('click', function () {
    const iphoneCount = getElement("iphoneInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    if (iphoneCountNum > 0) {
        iphoneCountNum -= 1;
        iphoneCount.value = iphoneCountNum;
        let iphoneValue = getElement("iphoneValue");
        let iphoneTotal = iphoneCountNum * 1219;
        iphoneValue.innerText = "$" + iphoneTotal;
    }
    changeTotal();

})

plusCaseButton.addEventListener('click', function () {
    const iphoneCount = getElement("caseInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    iphoneCountNum += 1;
    iphoneCount.value = iphoneCountNum;

    let iphoneValue = getElement("caseValue");
    let iphoneTotal = iphoneCountNum * 59;
    iphoneValue.innerText = "$" + iphoneTotal;
    changeTotal();
})

minusCaseButton.addEventListener('click', function () {
    const iphoneCount = getElement("caseInput");
    let iphoneCountNum = parseInt(iphoneCount.value);
    if (iphoneCountNum > 0) {
        iphoneCountNum -= 1;
        iphoneCount.value = iphoneCountNum;

        let iphoneValue = getElement("caseValue");
        let iphoneTotal = iphoneCountNum * 59;
        iphoneValue.innerText = "$" + iphoneTotal;
    }
    changeTotal();
})

function changeTotal() {
    var subtotal = getElement("subtotal");
    var total = getElement("total");
    let iphoneValue = getElement("iphoneValue");
    let caseValue = getElement("caseValue");

    subtotal.innerText = (parseInt(iphoneValue.innerText.replace("$", "")) + parseInt(caseValue.innerText.replace("$", "")));
    subtotal.innerText = "$" + subtotal.innerText;
    total.innerText = (parseInt(iphoneValue.innerText.replace("$", "")) + parseInt(caseValue.innerText.replace("$", "")));
    total.innerText = "$" + total.innerText;

}