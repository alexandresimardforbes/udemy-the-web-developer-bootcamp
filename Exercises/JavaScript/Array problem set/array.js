

/* function printReverse(toBeReversed) {
    console.log("---------- Print Reverse ----------")
    var reversedArray = [];
    toBeReversed.forEach(index, element => {
        reversedArray.unshift(element);
    });
    console.log(reversedArray);
    console.log("-----------------------------------")
} */


function printReverse(toBeReversed) {
    console.log("---------- Print Reverse ----------")
    for (let i = toBeReversed.length - 1; i >= 0; i--) {
        console.log(toBeReversed[i])
    }
    console.log("-----------------------------------")
}

function isUniforme(toBeChecked) {
    console.log("------------ Uniforme -------------")
    for (let i = 1; i < toBeChecked.length; i++) {
        if (toBeChecked[i] !== toBeChecked[0]) {
            return false
        }
    }
    return true;
    console.log("-----------------------------------")
}

function sumArray(toBeSummed) {
    console.log("------------ Sum Array ------------")
    var sum = 0;
    toBeSummed.forEach(element => {
        sum += element
    });
    console.log(sum)
    console.log("-----------------------------------")
}

function max(toBeMaxed) {
    console.log("--------------- Max ---------------")
    var max = toBeMaxed[0];
    toBeMaxed.forEach(element => {
      if(element > max) {
        max = element
       }
    });
    console.log(max)
    console.log("-----------------------------------")
}

    




