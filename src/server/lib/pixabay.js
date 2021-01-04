const fetch = require("node-fetch");
const utf8 = require("utf8");
const baseUrl = "https://pixabay.com/api/";

async function getLocPic (key = "", q = "") {
  let apiRequestUrl = new URL(baseUrl)
  
  apiRequestUrl.searchParams.append("key", key);
  apiRequestUrl.searchParams.append("q", utf8.encode(q));
  
  const request = await fetch (apiRequestUrl);

  try {
    let response = await request.json();
    let imageUrl = "";
    if (response.hits.length === 0) {
      imageUrl = "https://cdn.pixabay.com/photo/2016/01/09/18/27/old-1130731_1280.jpg";
    } else {
      imageUrl = response.hits[0].largeImageURL;
    };
    return imageUrl;
  } catch(error) {
    console.log("error", error);
  }
}

module.exports = getLocPic;
