/*
    Function Expression :- 
            Creating a function and store it in a variable known as a function expression.
            Function expression is not hoisted.
*/


// Here we create a function expression where we make a function and store in greet name variable.
let greet = function(){
    console.log("Welcome to party club!");
}

greet()


// Example 1 :- Create a function which take number as an argument and print upto 100. Try to make sure provide a number less than 100 🤣🤣.

let numbers = function(start_number){
    for (let i = start_number; i < 101; i++){
        console.log(i);
    }
}

let start_number = 81;
numbers(start_number);
