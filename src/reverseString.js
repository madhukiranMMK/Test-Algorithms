//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//   str
//     .toLowerCase()
//     .split('')
//     .reverse()
//     .join('');

function reverseString(text) {

  return text.split("").reverse().join("");
  
}

(module.exports = reverseString);


