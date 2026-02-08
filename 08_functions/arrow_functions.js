/*
    Arrow Functions :- 
            1.Arrow function is one of the easiest way to create a function in javascript.
            2.We can used arrow functions to write implementation on the spot inside a function that time we used arrow function.
            3.To create a arrow function we need to store it in variable then we call it by the variable name.
*/

// Here we see how to create a normal function then we try to convert the normal function into arrow function

// Normal function
function greet() {
    console.log("welcome to party all night club from normal function !!");
}

greet()

// Arrow function

let arrowFunction = () => {
    console.log("Welcome to party all night club from arrow function !!!");
}

arrowFunction()


// So lets we learn more in detail about arrow function

// 1.If we are not provide any argument to a function then we need to define the () paranthesis and if it contain only single line of statement then no need to defined inside curly brackets but it's a good practice to write code inside a curly brackets.

// Here we are no using the curly brackets
// let arrowFunction1 = () => console.log("Welcome to party all night club from arrow function 1 !!!");
// arrowFunction1()

let arrowFunction1 = () => {
    console.log("Welcome to party all night club from arrow function 1 !!!");
}

arrowFunction1()


// 2.If we are providing a single argument to a function then we no need to define the paranthesis just used the placeholder which hold the argument value.

let arrowFunction2 = name => {
    console.log(`Welcome to party club ${name}`);
}

arrowFunction2("krishna");


// 3.If we provide more than 1 argument then it is necessary to put them inside a parathesis

let arrowFunction3 = (num1 , num2) => {
    console.log(`Addition of ${num1} and ${num2} is :- ${num1 + num2}`);
}

let num1 = 20;
let num2 = 22;
arrowFunction3(num1,num2);