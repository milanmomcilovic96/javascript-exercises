let text;
const reverseString = function(text) {
    
    // let reversedText = [];
    // lengthOfText = text.length;
    // for(let i = 1; i <= lengthOfText; i++){
    //     reversedText[i - 1] = text.charAt(lengthOfText - i);
    // }
    // return reversedText.join('');

    return text.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;


// for petlja
// od 0 do duzine stringa 
// poslednji karakter ubaci u niz
// odraditi join

