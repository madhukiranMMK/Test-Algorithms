// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

  function char(text) {

    var maxTimesOccuredCharacter = '';
    var charObject = {};
    var maxCharValue = 0;
    
    for (var char of text) {
        if (charObject.hasOwnProperty(char)) {

          charObject[char]++;

        } 

        else {
          charObject[char] = 1;
        }
    }
    for (var char in charObject) {

        if (charObject[char] > maxCharValue) {

            maxCharValue = charObject[char];
            maxTimesOccuredCharacter = char;

        }
    }

    return maxTimesOccuredCharacter;
}

module.exports = char;
