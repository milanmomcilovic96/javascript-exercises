const leapYears = function(currentYear) {
  
    if(currentYear % 100 === 0 && currentYear % 400 !== 0){
        return false;
    }else if(currentYear % 4 !== 0){
        return false;
    }else{
        return true;
    }
    
    
};

// Do not edit below this line
module.exports = leapYears;


// da li je deljiva sa 4 ako jeste -> prestupna, ako nije -> nije prestupna
// da li je deljiva sa 400 ako jeste -> prestupna, ako nije -> nije prestupna
// da li je deljiva sa 100 -> ako jeste,
// da li je deljiva i sa 400 --> ako jeste prestupna je, ako nije -> nije prestupna