{
    const calculateResult = (amount, currency) => {
        const rateSEK = 0.44;
        const rateEUR = 4.56;
        const rateUSD = 3.78;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "SEK":
                return amount / rateSEK;

            case "USD":
                return amount / rateUSD;
        };
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
