function getElement(id) {
    return document.getElementById(id);
}
// get elements
const plusPhoneButton = getElement("phonePlus");
const minusPhoneButton = getElement("phoneMinus");
const plusCaseButton = getElement("casePlus");
const minusCaseButton = getElement("caseMinus");

function changeTotal() {
    var total_first = getElement("total_first");
    var total_second = getElement("total_second");
    let iphoneValue = getElement("iphoneValue");
    let caseValue = getElement("caseValue");

    total_first.innerText = (parseInt(iphoneValue.innerText.replace("$", "")) + parseInt(caseValue.innerText.replace("$", ""))).toLocaleString();
    total_first.innerText = "$" + total_first.innerText;
    total_second.innerText = (parseInt(iphoneValue.innerText.replace("$", "")) + parseInt(caseValue.innerText.replace("$", ""))).toLocaleString();
    total_second.innerText = "$" + total_second.innerText;
}
// phone
// add event listener
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