// 1. Create a string variable.

let st1 = "This is a first string";
console.log(st1);

// 2. Find length of a string.

let st2 = "This is a first string";
console.log(st2.length);

// 3. Convert string to uppercase.

let st3 = "This is a first string";
console.log(st3.toUpperCase());

// 4. Convert string to lowercase.

let st4 = "This is a first string";
console.log(st4.toLowerCase());

// 5. Reverse a string.

let st5 = "This is a first string";
let newSt5 = st5.split(' ').reverse().join(' ')
console.log(newSt5);

// 6. Check if string is palindrome.


// let st6 = "welcome";
// console.log(st6);
// let newSt6 = st6.split().reverse().join('')
// console.log(newSt6);
// if (st6 == newSt6) {
//     console.log("Palindrome String.");
// }else{
//     console.log('Not A Palindrome String.')
// }

// 7. Count vowels in a string.

let st7 = "welcome".toLowerCase();
let vowelCount = 0;
for (let i of st7) {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
        vowelCount += 1;
    }
}
console.log(`Vowel Occurs ${vowelCount} times in an ${st7}`);

// 8. Count consonants in a string.

let st8 = "welcome".toLowerCase();
let consonantsCount = 0;
for (let i of st7) {
    if (i != 'a' || i != 'e' || i != 'i' || i != 'o' || i != 'u') {
        consonantsCount += 1;
    }
}
console.log(`Consonants Occurs ${consonantsCount} times in an ${st8}`);

// 9. Check if string contains a word.
// 10. Concatenate two strings.
// 11. Replace a word in a string.
// 12. Remove spaces from string.
// 13. Extract substring.
// 14. Split string into array.
// 15. Join array into string.
// 16. Count words in a string.
// 17. Find first character.
// 18. Find last character.
// 19. Compare two strings.
// 20. Repeat a string.