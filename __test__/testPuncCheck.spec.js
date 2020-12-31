import { checkForPunctuation } from "../src/client/js/puncChecker"

describe("Testing the submit functionality", () => {
  test("Testing the checkForPunctuation() function", () => {
         let validSentence = checkForPunctuation('This is a test.')
         let invalidSentence = checkForPunctuation('This is a test')
         
         expect(checkForPunctuation).toBeDefined();
         expect(validSentence).toBeTruthy();
         expect(invalidSentence).toBeFalsy();
})});