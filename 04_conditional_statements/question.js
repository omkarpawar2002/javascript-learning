// 1. Check if a number is positive.

let number1 = 34;
if (number1 > 0) {
    console.log("Positive");
}

// 2. Check if a number is negative.

let number2 = -3;
if (number2 < 0) {
    console.log("Negative");
}

// 3. Check if a number is even or odd.

let number3 = 11;
if (number3 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 4. Find the largest of two numbers.

let num1 = 101;
let num2 = 201;
if (num1 > num2) {
    console.log(`${num1} is Largest Number`);
} else {
    console.log(`${num2} is Largest Number`);
}

// 5. Find the largest of three numbers.

let num3 = 101;
let num4 = 20;
let num5 = 34;
if ((num3 > num4) && (num3 > num5)) {
    console.log(`${num3} is Largest Number`);
} else if ((num4 > num3) && (num4 > num5)) {
    console.log(`${num4} is Largest Number`);
} else {
    console.log(`${num5} is Largest Number`);
}

// 6. Check if a person is eligible to vote.

let age = 17;
if (age >= 18) {
    console.log(`Your age is ${age} so you are eligible for vote`);
} else {
    console.log(`Your age is ${age} so you are not eligible for vote`);
}

// 7. Check if a year is a leap year.

let year = 2000;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not A Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not Leap Year");
}

// 8. Check if a number is divisible by 5.

let num6 = 10;
if (num6 % 5 == 0) {
    console.log(`Number is divisible by 5`);
} else {
    console.log("Number is not divisible by 5");
}

// 9. Check if a number is divisible by both 3 and 5.

let num7 = 9;
if (num7 % 5 == 0 && num7 % 3 == 0) {
    console.log("Number is divisible by both 3 and 5");
} else {
    console.log("Number is not divisible by both 3 and 5");
}

// 10. Use if-else to check pass or fail.

let marks = 54;
if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 11. Use switch to print day of week.

let day = "Wednesday";
switch (day) {
    case "Sunday":
        console.log("Sunday Found");
        break
    case "Monday":
        console.log("Monday Found");
        break
    case "Tuesday":
        console.log("Tuesday Found");
        break
    case "Wednesday":
        console.log("Wednesday Found");
        break
    case "Thursday":
        console.log("Thursday Found");
        break
    case "Friday":
        console.log("Friday Found");
        break
    case "Saturday":
        console.log("Saturday Found");
        break
    default:
        console.log("Not Match");
}

// 12. Use switch to print month name.

let month = 19;
switch (month) {
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    case 6:
        console.log("June");
        break
    case 7:
        console.log("Jully");
        break
    case 8:
        console.log("August");
        break
    case 9:
        console.log("September");
        break
    case 10:
        console.log("Octomber");
        break
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break
    default:
        console.log("Not Match");
}

// 13. Check if a character is vowel.

let char = "e";
if ((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u') || (char == 'A') || (char == 'E') || (char == 'I') || (char == 'O') || (char == 'U')) {
    console.log("Vowel");
} else {
    console.log("Not Vowel");
}

// 14. Check if a character is consonant.

let char1 = "x";
if ((char1 == 'a') || (char1 == 'e') || (char1 == 'i') || (char1 == 'o') || (char1 == 'u') || (char1 == 'A') || (char1 == 'E') || (char1 == 'I') || (char1 == 'O') || (char1 == 'U')) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// 15. Check if a number is zero.

let number4 = 0;
if (number4 == 0) {
    console.log(`Number is Zero`);
} else {
    console.log(`Number is not Zero`);
}

// 16. Compare two strings.

let st1 = "welcome";
let st2 = "Welcome";
console.log(st1 == st2);

// 17. Check grade based on marks.

let totalMarks = 87;
let grade;
if (totalMarks >= 90) {
    grade = 'A+';
} else if (totalMarks >= 80) {
    grade = 'A';
} else if (totalMarks >= 70) {
    grade = 'B';
} else if (totalMarks >= 60) {
    grade = 'C';
} else if (totalMarks >= 40) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Student Having Total Marks ${totalMarks} with ${grade} grade.`);

// 18. Check login credentials.

let isLogin = true;
if (isLogin) {
    console.log("You successfully login");
} else {
    console.log("You logged out");
}

// 19. Check temperature condition.

let temperature = 64;
if (temperature <= 30) {
    console.log("Temperature is low");
} else if (temperature <= 75) {
    console.log("Temperature is Medium");
} else {
    console.log("Temperature is High");
}

// 20. Check if a number is within a range.

let numberRange = 44;
if (numberRange > 20 && numberRange <= 40) {
    console.log("Number Occur in 20 or 40 range");
} else if (numberRange > 40 && numberRange < 80) {
    console.log("Number Occur in 40 or 80 range");
} else {
    console.log("Number Occur in more than 80 range");
}