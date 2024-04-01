const express = require("express");
const path = require("path");
const { getCurrentWeather, getRandomQuote, fetchCountryAndCityData } = require('./modules/trakt/api');

const app = express();
const port = process.env.PORT || 8888;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//Page Routing

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/contactus", (request, response) => {
  response.render("contactus");
});

app.get('/', async (request, response) => {
    const countryCityData = await fetchCountryAndCityData();
    const countries = countryCityData.map(country => ({ name: country.name.common }));
    response.render('index', { title: 'WeatherQuoter', countries });
});

app.get('/weather', async (request, response) => {
  const country = request.query.country;
  
    const weatherData = await getCurrentWeather(country);
    
    const quoteData = await getRandomQuote();
    
    const countryCityData = await fetchCountryAndCityData();
    
    const countries = countryCityData.map(country => ({ name: country.name.common }));
    
    response.render('weather', {
      title: 'Weather Information',
      country: country,
      temperature: weatherData.main.temp,
      feels_like: weatherData.main.feels_like,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      icon: weatherData.weather[0].icon,
      quote: quoteData.content,
      author: quoteData.author,
      countries: countries 
    });
});


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
