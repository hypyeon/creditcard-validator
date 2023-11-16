function getDigit(val) {
    const inputVal = val.trim();
    const inputArr = inputVal.split('');
    const numArr = inputArr.map(v => parseFloat(v));
    const numArrLen = numArr.length;
    const isNumeric = numArr.every(v => typeof v === 'number');
    if (numArrLen === 16 && isNumeric) {
        return numArr;
    } else {
        alert("Please provide 16 digit Credit Card number.");
        window.location.reload();
    }
};

function transformNum(arr) {
    const digitArr = getDigit(arr);
    for (let i = 1; i <= digitArr.length; i += 2) {
        if (digitArr[i] >= 5) {
            const doubledVal = digitArr[i] * 2;
            const numAsStr = doubledVal.toString();
            const firstDigit = parseFloat(numAsStr[0]);
            const secondDigit = parseFloat(numAsStr[1]);
            const sumOfTwoDigits = firstDigit + secondDigit;
            digitArr[i] = sumOfTwoDigits;
        } else {
            digitArr[i] = digitArr[i] * 2;
        };
    };
    return digitArr;
};

function findCardCompany(arr) {
    const cardNumArr = transformNum(arr);
    const firstNum = cardNumArr[0];
    const numAsStr = firstNum.toString();
    let company;
    switch (numAsStr) {
        case '4':
            company = 'Visa';
            break;
        case '5':
            company = 'Mastercard';
            break;
        case '6':
            company = 'Discover';
            break;
        default:
            company = 'not registered in the system';
    };
    return company;
};

function sumOfTransformedNum(arr) {
    const sum = arr.reduce((acc, value) => {
        return acc + value;
    }, 0);
    return sum;
};

function validator() {
    const val = document.getElementById("number").value;
    const transformedNum = transformNum(val);
    const cardCompany = findCardCompany(val);
    const sum = sumOfTransformedNum(transformedNum);
    const sumToStr = sum.toString();
    const validity = document.getElementById("validity");
    const cardComp = document.getElementById("cardInfo");
    cardComp.innerText = `Your card issuer is ${cardCompany}.`;
    if (sumToStr[1] === '0') {
        validity.innerText = "This Credit Card number is VALID.";
    } else {
        validity.innerText = "This Credit Card number is INVALID.";
    };
};

function formHandler() {
    const form = document.querySelector("form");
    const text = document.getElementById("text");
    const val = document.getElementById("number").value;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        text.classList.remove("hidden");
        validator();
    });
    form.addEventListener("reset", () => {
        text.classList.add("hidden");
    })
};

window.onload = () => {
    formHandler();
};