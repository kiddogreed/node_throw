
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    
    if(a > 0){
       console.log("possitive");
    }else if(a === 0){
        (Error ('Zero Error'))
    }else if( a < 0){
        (Error ('Negative Error'))
       // throw message("Negative Error")
    }
    
}

isPositive(1)