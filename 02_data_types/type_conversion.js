/*
Type conversion :- 
            Type conversion is a process of converting one type of data into another.

            There are two types of type conversion in javascript :- 
                1.Implicit type conversion
                2.Explicit type conversion

            1.Implicit type conversion :- 
                        In implicit type conversion javascript automatically convert the one type of data into another.
            
            2.Explicit type conversion :- 
                        In explicit type conversion javascript we manually convert the one type of data into another.

            To perform the type conversion operation manually there are some built in function already provided :- 
                    1.Number
                    2.Boolean
                    3.String
            
                1.Number :- This will convert the numeric string to Number data type
                2.Boolean :- This will convert value into boolean data type.
                3.String :- This will convert the value into string data type.
*/

// Here javascript automatically convert the one type to another that is implicit type conversion.
let num1 = 2;
let num2 = '2';
console.log(num1 + num2);

// Here we manually convert the data type so it perform the valid operation that is explicit type conversion.
let num3 = 2;
let num4 = '2';
console.log(num3 + Number(num4));

