let word, number;
const repeatString = function(word, number) {
    if(number <0){
        return 'ERROR';
    }
    
    let text = '';
    for(let i = 0; i<number; i++){
        text += word;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
