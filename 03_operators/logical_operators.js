/*
Logical operators :- 
            Logical operators are works on boolean expression and return a boolean result.

            Logical Operators are :- 
                1.&& [and]
                2.|| [or]
                3.! [not]
*/

let num1 = 10;
let num2 = 4;

// Here we perform and operation
console.log(`${(num1 > num2) && (num1 == 9)}`);
console.log(`${(num1 > num2) && (num1 == 10)}`);

// Here we perform or operation
console.log(`${(num1 < num2) || (num1 == 9)}`);
console.log(`${(num1 < num2) || (num1 == 10)}`);

// Here we perform not operation
console.log(`${!(num1 > num2)}`);
console.log(`${!(num1 < num2)}`);

