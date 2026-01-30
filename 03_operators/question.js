// 1. Use arithmetic operators to add two numbers.

let num1 = 10;
let num2 = 11;
console.log(`Addition of ${num1} and ${num2} = ${num1 + num2}`);

// 2. Use arithmetic operators to subtract two numbers.

let num3 = 10;
let num4 = 11;
console.log(`Subtraction of ${num3} and ${num4} = ${num3 - num4}`);

// 3. Use arithmetic operators to multiply two numbers.

let num5 = 3;
let num6 = 11;
console.log(`Multiplication of ${num5} and ${num6} = ${num5 * num6}`);

// 4. Use arithmetic operators to divide two numbers.

let num7 = 10;
let num8 = 11;
console.log(`Division of ${num7} and ${num8} = ${num7 / num8}`);

// 5. Find remainder using modulus operator.

let num9 = 10;
let num10 = 11;
console.log(`Modulus of ${num9} and ${num10} = ${num9 % num10}`);

// 6. Check if a number is even using modulus operator.

let num = 3;
if (num % 2 == 0) {
    console.log(`${num} is Even Number`);
} else {
    console.log(`${num} is Odd Number`);
}

// 7. Use increment operator to increase a number by 1.

let number = 10;
console.log(`Original Number ${number}`);
number++
console.log(`Updated Number ${number}`);

// 8. Use decrement operator to decrease a number by 1.

let number1 = 10;
console.log(`Original Number ${number1}`);
number1--
console.log(`Updated Number ${number1}`);

// 9. Compare two numbers using == operator.

let n1 = 10;
let n2 = '10';
console.log(n1 == n2);

// 10. Compare two numbers using === operator.

let n3 = 10;
let n4 = '10';
console.log(n3 === n4);

// 11. Compare two numbers using != operator.

let n5 = 12;
let n6 = "1";
console.log(n5 != n6);

// 12. Compare two numbers using !== operator.

let n7 = 12;
let n8 = "1";
console.log(n7 !== n8);

// 13. Use relational operators to find the largest of two numbers.

let number2 = 101;
let number3 = 105;
if (number2 > number3) {
    console.log(`${number2} is greater than ${number3}`);
} else {
    console.log(`${number3} is greater than ${number2}`);
}

// 14. Use logical AND operator to check two conditions.

let a = 10;
let b = 12;
console.log((a == 10) && (a > b));

// 15. Use logical OR operator to check two conditions.

let c = 10;
let d = 12;
console.log((d != 12) || (d > c));

// 16. Use logical NOT operator to reverse a condition.

let a1 = 101;
console.log(!(a1 > 10));

// 17. Use assignment operator to add a value to a variable.

let result = 20;
result += 5
console.log(result);

// 18. Use assignment operator to subtract a value from a variable.

let res = 200;
res -= 150;
console.log(res);

// 19. Use ternary operator to check even or odd.

let x = 3;
let checkResult = (x % 2 == 0) ? "Even" : "Odd";
console.log(checkResult);

// 20. Use typeof operator to check variable type.

let y = 455;
console.log(typeof y);