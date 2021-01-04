async function getCoordinates (placename = "", country = "", username = "") {
  const fetch = require("node-fetch");
  const baseUrl = "http://api.geonames.org/postalCodeSearchJSON";
  
  let apiRequestUrl = new URL(baseUrl)
  
  apiRequestUrl.searchParams.append("placename", placename);
  apiRequestUrl.searchParams.append("country", country);
  apiRequestUrl.searchParams.append("maxRows", "1");
  apiRequestUrl.searchParams.append("username", username);
  
  let request = await fetch (apiRequestUrl);

  try {
    let response = await request.json();
    let coords = {
      lat: response.postalCodes[0].lat,
      long: response.postalCodes[0].lng,
    }
    return coords;
  } catch(error) {
    console.log("error", error);
  }
}

module.exports = getCoordinates;
