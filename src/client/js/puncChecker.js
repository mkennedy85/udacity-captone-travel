function checkForPunctuation(inputText) {
    return /[!?.]$/.test(inputText[inputText.length - 1]);
}

export { checkForPunctuation };
