function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let placename = document.getElementById("placename").value;
    let country = document.getElementById("country").value;

    const postRequest = async (placename = "", country = "") => {
        const request = await fetch(`/weather?placename=${placename}&country=${country}`, {
            method: "POST",
            credentials: "same-origin",
        });

        try {
            let results = await request.json();
            return results;
        } catch (error) {
            console.log("error", error);
        }
    };

    const formatResults = function (results) {
        let formattedStr = `
        <strong>Low:</strong> ${results.weather.low_temp}&#176</br>
        <strong>High:</strong> ${results.weather.max_temp}&#176</br>
        <strong>Clouds:</strong> ${results.weather.clouds}%</br>
        <img src=${results.pic} alt="Not found">
        `;
        return formattedStr;
    };

    postRequest(placename = placename, country = country)
        .then(function (results) {
            return formatResults(results);
        })
        .then(function (results) {
            document.getElementById("results").innerHTML = results;
        });
}

export { handleSubmit };
