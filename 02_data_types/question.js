// 1. Create a variable of type number.

let num1 = 23;
console.log(typeof num1);

// 2. Create a variable of type string.

let st1 = "This is first string";
console.log(st1);

// 3. Create a variable of type boolean.

let isActive = false;
console.log(isActive);

// 4. Create a variable of type undefined.

let result;
console.log(typeof result);

// 5. Create a variable of type null.

let newVariable = null;
console.log(newVariable);

// 6. Check the type of null.

let newVariable1 = null;
console.log(typeof newVariable1);

// 7. Check the type of undefined.

let result1;
console.log(typeof result1);

// 8. Convert a string number into a number.

let st_num = "1234";
console.log(Number(st_num),typeof(Number(st_num)));

// 9. Convert a number into a string.

let number = 123;
console.log(String(number),typeof(String(number)));

// 10. Check if a variable is NaN.

let num = "welcome";
console.log(isNaN(num));

// 11. Compare number and string using ==.

let n1 = 10;
let n2 = "10";
console.log(n1 == n2);

// 12. Compare number and string using ===.

let m1 = 10;
let m2 = "10";
console.log(m1 === m2);

// 13. Store a big integer value.

let bigNumber = 233445677865n;
console.log(bigNumber);

// 14. Create a symbol.

let symbol_variable = Symbol("This is a symbol");
console.log(symbol_variable);

// 15. Check type of array.

let arr = [10,20,30,40];
console.log("Type of array :- ",Array.isArray(arr));

// 16. Check type of object.

let person = {
    "name":"harry",
    "city":"pune"
};
console.log(typeof person);

// 17. Convert boolean to string.

let isAvailable = false;
console.log(String(isAvailable));

// 18. Convert string to boolean.

let newString = "Welcome";
console.log(Boolean(newString));

// 19. Store Infinity in a variable.

let infinite_value = (3 / 0);
console.log(infinite_value);

// 20. Store -Infinity in a variable.

let _infinite_value = (-3 / 0);
console.log(_infinite_value);
