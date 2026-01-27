/*
Data Types :- 
        Data types representes different types of data stored in variable.

In javascript data types are divided into 2 categories :-
    1.Primitive data type
    2.Non-primitive data type

1.Primitive data type :- 
                Primitive data types are those data type who hold a single and simple value.
                It included number , null , string , symbol , undefined , boolean , bigint etc.

2.Non-primitive data type :- 
                Non-Primitive data types are those data type who hold multiple types of values.
                It included array and objects.

*/

// Lets here we talk about only Primitive data types

/*
    a.strings :- 
            1.A string is a sequence of characters.
            2.Anything which kept together inside single quotes , double qoutes and backticks are treated as a string.
*/

// Using a single quotes
let name = 'Ashu';
console.log(name);

// Using a Double quotes
let name1 = "Vikrant";
console.log(name1);

// Using a Backticks
let name2 = `Nirmala`;
console.log(name2);


/*
    b.number :- 
            Number data type can hold whole number as well as a decimal numbers.
            It included 3 , -4 , 34.34 , -34.12 etc.
*/

let num1 = 23;
console.log(num1);

let num2 = -23;
console.log(num2);

let num3 = 65.45
console.log(num3);

let num4 = -56.35
console.log(num4);


/*
    c.boolean :- 
            Boolean data types represents only 2 values either true or false.
            The name boolean comes from one of the famous mathematician name george bouely.
            He founded true or false.
*/

let isLogin = true;
console.log(isLogin);

let isActive = false;
console.log(isActive);


/*
    d.BigInt :- 
            BigInt represents the number which is too big or too small.
            It was introduced in new version of ES6.
            The number ends with n will be BigInt number.
*/

let big_num = 343456643321223354532n;
console.log(big_num);

let new_big_num = 32n;
console.log(new_big_num);


/*
    e.null :- 
            null data type represents an empty value.
            It's a good practice to explicitely mentioned null which means nothing or empty.
*/

// Good practice
let number = null;
console.log(number);


/*
    f.undefined :- 
                The variable who declare but not yet initialize will be undefined.
                We can explicitly also mentioned the undefined but it's not a standard practice.
*/

// Good practice
let new_number;
console.log(new_number);

// bad practice
let new_number_1=undefined;
console.log(new_number_1);


/*
    g.Symbol:- 
            Symbol represents the immutable and unique instance.
            It was introduced in new version ES6.
*/

let symbol_num = Symbol(23);
console.log(symbol_num,typeof symbol_num);

// If we want to check the data type of variable then we used typeOf operator :- 

let first_string = "welcome";
let first_number = 23;
let first_boolean = true;
let first_null = null;
let first_undefined;
let first_bigint = 23455321234445n;
let first_symbol = Symbol();
console.log(first_string,typeof first_string);
console.log(first_number,typeof first_number);
console.log(first_boolean,typeof first_boolean);
console.log(first_null,typeof first_null);
console.log(first_undefined,typeof first_undefined);
console.log(first_bigint,typeof first_bigint);
console.log(first_symbol,typeof first_symbol);

