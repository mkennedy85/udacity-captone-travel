async function getWeather (key = "", lat = "", lon = "") {
  const fetch = require("node-fetch");
  const baseUrl = "http://api.weatherbit.io/v2.0/forecast/daily";
  
  let apiRequestUrl = new URL(baseUrl)
  
  apiRequestUrl.searchParams.append("key", key);
  apiRequestUrl.searchParams.append("lat", lat);
  apiRequestUrl.searchParams.append("lon", lon);
  apiRequestUrl.searchParams.append("units", "I");
  
  let request = await fetch (apiRequestUrl);

  try {
    let response = await request.json();
    let forecast = {
      valid_date: response.data[0].valid_date,
      low_temp: response.data[0].low_temp,
      max_temp: response.data[0].max_temp,
      clouds: response.data[0].clouds,
    }
    return forecast;
  } catch(error) {
    console.log("error", error);
  }
}

module.exports = getWeather;
