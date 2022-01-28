const sumAll = function(start, end) {

    if(typeof(start) !== 'number' || typeof(end) !== 'number'){
        return 'ERROR';
    }


    if(start < end){
        let sum = 0;
        for(let i = start; i <= end; i++){
            sum += i;             
        }
        if(sum < 0){
            return "ERROR";
        }else{
            return sum;
        }
    }else if(start > end){
        let sum = 0;
        for(let i = end; i <= start; i++){
            sum += i;
        }
        if(sum < 0){
            return "ERROR";
        }else{
            return sum;
        }
    }else{
        return end;
    }

};

// Do not edit below this line
module.exports = sumAll;
