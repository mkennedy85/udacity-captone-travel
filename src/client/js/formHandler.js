function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    let validSentence = Client.checkForPunctuation(formText);

    if (validSentence) {
        const postTxt = async (txt = "") => {
            const request = await fetch(`/analysis?txt=${txt}`, {
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

        const formatTxt = function (txt) {
            let formattedStr = `
            <strong>Model:</strong> ${txt.model}</br>
            <strong>Agreement:</strong> ${txt.agreement}</br>
            <strong>Score:</strong> ${txt.score_tag}</br>
            <strong>Subjectivity:</strong> ${txt.subjectivity}</br>
            <strong>Irony:</strong> ${txt.irony}</br>
            <strong>Confidence:</strong> ${txt.confidence}</br>
            `;
            return formattedStr;
        };

        postTxt(formText)
            .then(function (res) {
                return formatTxt(res);
            })
            .then(function (res) {
                document.getElementById("results").innerHTML = res;
            });
    } else {
        alert("Please use proper punctuation.");
        document.getElementById("results").innerHTML = "";
    }
}

export { handleSubmit };
