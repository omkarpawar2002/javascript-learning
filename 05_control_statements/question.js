// 1. Print numbers from 1 to 10 using for loop.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 2. Print numbers from 10 to 1 using while loop.

let num = 10;
while (num > 0) {
    console.log(num);
    num--
}

// 3. Print even numbers from 1 to 20.

for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4. Print odd numbers from 1 to 20.

for (let i = 1; i < 21; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 5. Print multiplication table of a number.

let number = 2;
for (let i = 1; i < 11; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// 6. Find sum of first 10 natural numbers.

let totalSum = 0;
for (let i = 1; i < 11; i++) {
    totalSum += i;
}
console.log(`Total is ${totalSum}`);

// 7. Find factorial of a number.

let number1 = 5;
let fact = 1;
for (let i = 1; i <= number1; i++) {
    fact *= i;
}
console.log(`Factorial of ${number1} is ${fact}`);

// 8. Count digits in a number.

let number2 = 3244;
let countDigit = 0;
let st_number2 = String(number2);
console.log(`Total Digits in ${number2} is ${st_number2.length}`);

// 9. Reverse a number.

let orginalNumber = 12345;
console.log(`Original Number :- ${orginalNumber} and ${typeof orginalNumber}`);
let st_number = String(orginalNumber);
const new_arr = st_number.split('')
new_arr.reverse()
let st = new_arr.join('')
st = Number(st)
console.log(`Updated Number :- ${st} and ${typeof st}`);

// 10. Print Fibonacci series.

let n1 = 0;
let n2 = 1;
const fibonacci_length = [];
while (fibonacci_length.length < 25) {
    fibonacci_length.push(n1);
    temp = n1 + n2
    n1 = n2
    n2 = temp
}
console.log(fibonacci_length);

// 11. Check if a number is prime.

let checkNumber = 7;
let isPrime = true
for (let i = 2; i < checkNumber; i++) {
    if (checkNumber % i == 0) {
        console.log("not a prime number");
        isPrime = false
        break
    }
}
if (isPrime) {
    console.log(`${checkNumber} is a prime number`);
}else {
    console.log(`${checkNumber} is not a prime number`);
}

// 12. Find sum of digits of a number.

let digits = 2345;
let sumOfDigits = 0;
let st_digits = String(digits);
for (let i = 0; i < st_digits.length; i++) {
    sumOfDigits += Number(st_digits[i]);
}
console.log(`Total is ${sumOfDigits}`);

// 13. Print all prime numbers between 1 and 100.

for (let i = 1; i < 101; i++) {
    let innerLoop = true
    if (i < 2)
        continue
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            innerLoop = false
            break

        }
    }
    if (innerLoop) {
        console.log(`${i} is a Prime Number`);
    }
}

// 14. Print pattern of stars.

let numm = 5; // size of the square

for (let i = 0; i < numm; i++) {
    let row = '';           // create an empty string for each row
    for (let j = 0; j < numm; j++) {
        row += '* ';        // append stars with a space
    }
    console.log(row);       // print the whole row at once
}


// 15. Print square numbers from 1 to 10.

for (let i = 1; i < 11; i++) {
    console.log(`Number ${i} with Square ${i ** 2}`);
}

// 16. Print cube numbers from 1 to 10.

for (let i = 1; i < 11; i++) {
    console.log(`Number ${i} with Cube ${i ** 3}`);
}

// 17. Print numbers divisible by 3.

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// 18. Print numbers divisible by 5.

for (let i = 1; i < 101; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}

// 19. Print numbers divisible by both 3 and 5.

for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}

// 20. Use do-while loop example.

let newNum = 5;
do {
    console.log(newNum);
    newNum--;
} while (newNum > 0);