function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let travel__city = document.getElementById("travel__city").value;
    let travel__country = document.getElementById("travel__country").value;
    let travel__date = new Date(document.getElementById("travel__date").value);
    let current__date = new Date();
    let days__until = Math.floor((travel__date - current__date) / (1000*60*60*24) ); 

    const postRequest = async (travel__city = "", travel__country = "") => {
        const request = await fetch(`/weather?placename=${travel__city}&country=${travel__country}`, {
            method: "POST",
            credentials: "same-origin",
        });

        try {
            let results = await request.json();
            return results;
        } catch (error) {
            console.log("error", error);
            document.getElementById("placename__result").innerHTML = `Location unavailable`;
        }
    };

    const displayResults = function (results) {
        document.getElementById("placename__result").innerHTML = (travel__city) ? `${travel__city}, ${travel__country}` : "Location unavailable";
        document.getElementById("days__until").innerHTML = days__until ? `${days__until}` : "Unavailable";
        document.getElementById("high__temp").innerHTML = results.weather.max_temp ? `${results.weather.max_temp}&#176` : "Unavailable";
        document.getElementById("low__temp").innerHTML = results.weather.low_temp ? `${results.weather.low_temp}&#176` : "Unavailable";
        document.getElementById("cloud__coverage").innerHTML = results.weather.clouds ? `${results.weather.clouds}%` : "Unavailable";
        document.getElementById("trip__photo").src = `${results.pic}`;
    };

    postRequest(travel__city = travel__city, travel__country = travel__country)
        .then(function (results) {
            displayResults(results);
        })
}

export { handleSubmit };
