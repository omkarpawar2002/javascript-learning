/*
    Function Declaration :- 
            Here we see first way of creating a normal function by using the reserved function keyword.
            Function declaration always hoisted.
*/


// This is a function declaration
function fun_name() {
    console.log("Hello World!");
}
fun_name()  // This is a function call


// Example 1 :- Create a function which take number and print the square of number.

function square(num) {
    console.log(num ** 2);
}

let number = 4;
square(number);


// Example 2 :- Create a function which create a table of number

function makeTable(num){
    for (let i = 1;i<11;i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

let num = 5;
makeTable(num);
