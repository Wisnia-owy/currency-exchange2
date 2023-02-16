let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateGBP = 5.23;
let rateEUR = 4.75;
let rateUSD = 4.20;
let rateBTC = 74.043;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "GBP":
            result = amount / rateGBP;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "BTC":
            result = amount / rateBTC;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
        2
    )} ${currency}`;



});


