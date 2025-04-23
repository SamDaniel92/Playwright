// selectors/selectors.ts

export const selectors = {
    flightSearchPage: {
        tripOneWay: "//span[text()='One-Way']/preceding::input[@type='radio'][1]",
        originInput: "//input[@placeholder='From']",
        destinationInput: "//input[@placeholder='To']",
        dateInput: "//input[@type='date']",
        searchButton: "//button[text()='Search']"
    },
    TestPage: {
        cardNumberInput: "#card-number",
        cvvInput: "#cvv",
        payButton: "#pay"
    }

};
