const removeFromArray = function(theArray, ...theArgs) {
    for(let i = 0; i < theArgs.length; i++){
        for(let j = 0; j < theArray.length; j++){
            if(theArgs[i] === theArray[j]){
                theArray.splice(j, 1)
            }
        }
    }
    
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
