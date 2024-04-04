document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const countrySelect = document.getElementById('countrySelect');

    searchButton.addEventListener('click', () => {
        const selectedCountry = countrySelect.value;

        //Passing country name to api
        const api = require('./api');
        api.getCurrentWeather(selectedCountry);
    });
});
