document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const countrySelect = document.getElementById('countrySelect');

    // Add an event listener to the search button
    searchButton.addEventListener('click', () => {
        const selectedCountry = countrySelect.value;

        // Pass the country name that is selected to api.js
        const api = require('./api');
        api.getCurrentWeather(selectedCountry);
    });
});
