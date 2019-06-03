var count = -10;
while (count <= 19){
    console.log(count)
    count ++;
}

console.log("------------------------------------------------------------------------")

count = 10;
while (count <= 40) {
    console.log(count)
    count += 2;
}

console.log("------------------------------------------------------------------------")

count = 300;
while (count <= 333) {
    if( count % 2 != 0){
        console.log(count)
    }
    count ++;
}

console.log("------------------------------------------------------------------------")

count = 5;
while (count <= 50) {
    if( count % 5 == 0 && count % 3 == 0){
        console.log(count)
    }
    count ++;
}