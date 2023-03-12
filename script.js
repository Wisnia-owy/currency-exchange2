{


    const calculateResult = (amount, currency) => {

        const rateGBP = 5.23;
        const rateEUR = 4.75;
        const rateUSD = 4.20;
        const rateBTC = 74.043;

        switch (currency) {
            case "GBP":
                return amount / rateGBP;


            case "EUR":
                return amount / rateEUR;


            case "USD":
                return amount / rateUSD;


            case "BTC":
                return amount / rateBTC;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(
            2
        )} ${currency}`;
    }


    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");



        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);


        updateResultText(amount, result, currency);





    }

    const init = () => {

        const formElement = document.querySelector(".js-form");


        formElement.addEventListener("submit", onFormSubmit);

    };

    init();




}