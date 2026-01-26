/*
Variable :- 
        Variable is a container which is used to hold a value.

There are 3 ways we can declare a variable :-
    1.let
    2.var
    3.const

Note :- 
        1.We mostly declare a variable by using let rather than var.
        2.Most recommended way to declare a variable using let keyword.
        3.let is a new way to declare a variable in javascript.
        4.Always used const keyword when the value of variable not be change throught the program.
*/


// Here num is a variable and 23 is a value.
// Here let is a way to tell program that num is going with a variable and hold a value 23.
// = is an assignment operator which is used to assign the right hand side value to the left side of an variable.
let num = 23; 
console.log(num);


// We can declare multiple variable in a single line also
let num1 = 10 , num2 = 20 , num3 = 30;
console.log(num1);
console.log(num2);
console.log(num3);


// Here we see how to declare and initialize a variable
let new_num;    // Declaration
new_num = 34;   // Initialization


// By using let and var we can declare a variable and later on we can initialize them
let num4;
num4 = 44;
console.log(num4);

var num5;
num5 = 55;
console.log(num5);

// But if we are declare a variable using the const keyword then while declaring it we must initialize them
/*
const pi;
pi = 3.14;
console.log(pi);  // Here we get an syntax error about missing initializer
*/
const pi = 3.14;
console.log(pi);


// Difference between let and var

/*
1.let :- 
        a.let is a new way to declare a variable in javascript.
        b.let is a block scope variable so the variable does not accessable outside the block.

2.var :- 
        a.var is a older way to declare a variable in javascript.
        b.var is a function scope it can be accessable through anywhere in function.
*/


/*
Variable defining rule in javascript
1.Variable name can start with letter , underscore and dollar only.
2.Variable can not start with an number.
3.Variable names are case sensitive.
4.Reserved keywords can not be used as a variable name in javascript.
*/