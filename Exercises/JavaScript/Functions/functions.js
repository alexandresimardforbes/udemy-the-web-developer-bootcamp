function isEven(number) {
    if(number % 2 === 0){
        return true
    }
     return false
}

function factorial(number) {
    var result = 1;
    for (number; number > 0; number--) {
    result = result * number;       
    }

    return result;
}

function kebabToSnake(variableName) {

    var newStr = variableName.replace("-" , "_");
    return newStr;
}