// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(text) {
  
  let matchedVowels = text.match(/[aeiou]/gi);

  if (matchedVowels) {

    return matchedVowels.length;
    
  } 
  else {

    return 0;

  }
}

module.exports = vowels;
