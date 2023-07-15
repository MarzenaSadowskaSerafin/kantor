{
    const welcomeAll = () => {
        console.log("Welcome everybody developers!")
    }

    welcomeAll();

    const markField = () => {
        const choiceEURO = document.querySelector(".js-choiceEURO");
        const choiceUSD = document.querySelector(".js-choiceUSD");
        const choiceCHF = document.querySelector(".js-choiceCHF");
        const choiceSEK = document.querySelector(".js-choiceSEK");

        if (choiceEURO.checked == true)
            return choiceEURO.value;

        if (choiceUSD.checked == true)
            return choiceUSD.value;

        if (choiceCHF.checked == true)
            return choiceCHF.value;

        if (choiceSEK.checked == true)
            return choiceSEK.value;
    }

    const isPLN = () => {
        const quantityElement = document.querySelector(".js-quantity");

        return +quantityElement.value;
    }

    const currencyCourse = (valute) => {
        const rateEURO = 4.48;
        const rateUSD = 4.12;
        const rateCHF = 4.60;
        const rateSEK = 0.38;

        let courseCurrency = null;

        if (valute == "EURO")
            courseCurrency = rateEURO;

        if (valute == "CHF")
            courseCurrency = rateCHF;

        if (valute == "USD")
            courseCurrency = rateUSD;

        if (valute == "SEK")
            courseCurrency = rateSEK;

        return courseCurrency;
    }

    const resultCurrency = () => {

        let result = 0.00;
        let nameCurrency = markField();

        let valueRate = currencyCourse(nameCurrency);
        let quantity = isPLN();
        result = quantity / valueRate;

        return result;
    }

    const dataText = () => {
        const resultElement = document.querySelector(".js-result");
        let nameCurrency = "";
        let result = null;

        result = resultCurrency();
        nameCurrency = markField();
        resultElement.innerText = result.toFixed(2) + " " + nameCurrency;
    }

    const invit = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            dataText();
        })

        formElement.addEventListener("reset", () => {
            resultElement.innerText = null;
        })
    }

    invit();
}


