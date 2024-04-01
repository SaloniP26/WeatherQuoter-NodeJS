const weatherAPI = "http://api.openweathermap.org/data/2.5/weather"; // Base URL for Weather API request
const quoteAPI = "https://api.quotable.io/random"; // Base URL for Quotes API request
const apiKey = "c0c2361bba8c45bfd309c3e30236b3b6";
const locationAPI = "https://restcountries.com/v3/all"; // Base URL for Location API request

/*
 * Functions for Weather API requests.
 */

// Function to get current weather data for a city.
async function getCurrentWeather(country) {
    const reqUrl = `${weatherAPI}?q=${country}&appid=${apiKey}&units=metric`;
    let options = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let response = await fetch(
        reqUrl,
        options
    );
    return response.json();
  
}

async function getRandomQuote() {
    const reqUrl = `${quoteAPI}`;
    let options = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let response = await fetch(
        reqUrl,
        options
    );
    return response.json(); 
}

async function fetchCountryAndCityData() {
    const reqUrl = `${locationAPI}`;
    let options = {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let response = await fetch(
        reqUrl,
        options
    );
        return response.json();
      
    }

module.exports = {
    getCurrentWeather,
    getRandomQuote,
    fetchCountryAndCityData
};
