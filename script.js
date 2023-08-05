console.log("With While loop:")
let number = 9;
let i = 1;
while(i <= 10){
    console.log(number + " * " + i + " = " + number * i);
    i++;
}

console.log("With For loop:");
for(number = 9, i=1; i<=10; i++){
    console.log(number + " * " + i + " = " + number * i);
}