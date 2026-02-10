// Methods :- As we know string is immutable in nature so we cannot modify it once created but there are some methods provided so by using those methods we can format out string in different way.

// 1.toUpperCase() :- This method is used to convert the string into uppercase and if there is null and undefined then it raise an error

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.toUpperCase());
console.log(`Original : ${st1}`);
*/


// 2.toLowerCase() :- This method is used to convert the string into lowercase and if there is null and undefined then it raise an error

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.toLowerCase());
console.log(`Original : ${st1}`);
*/


// 3.startsWith() :- startsWith() method return true if the string startswith specified character and if not then it return false.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.startsWith('This'));
console.log(`Original : ${st1}`);
*/


// 4.endsWith() :- endsWith() method return true if the string endsWith specified character and if not then it return false.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.endsWith('g'));
console.log(`Original : ${st1}`);
*/


// 5.length :- length property return the number of characters in string.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.length);
*/


// 6.includes() :- includes() method return true if the specified sub-string is present in string otherwise it return false.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.includes('tr'));
console.log(`Original : ${st1}`);
*/


// 7.indexOf() :- The string indexOf() method returns the first index occurance of specified substring in a string if it not found then it return -1.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.indexOf('tr'));
console.log(`Original : ${st1}`);
*/


// 8.lastIndexOf() :- The string lastIndexOf() method returns the last index occurance of specified substring in a string and if it not found then it return -1.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.lastIndexOf('i'));
console.log(`Original : ${st1}`);
*/


// 9.split() :- split() method divides the string into a list of substrings and returns them as an array.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.split(' '));
console.log(`Original : ${st1}`);
*/


// 10.slice() :- slice() method is used to return a new string containing extract portion of string. 

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.slice(2,7));
console.log(`Original : ${st1}`);
*/


// 11.trim() :- trim() method remove the whitespaces from both the end of string.

/*
let st1 = "       This is a string       ";
console.log(`Original : ${st1}`);
console.log(st1.trim());
console.log(`Original : ${st1}`);
*/


// 12.concat() :- concat() method is used to concatenate the given arguments to the given string.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
st1 = st1.concat(" And this is an another string!");
console.log(`Original : ${st1}`);
*/


// 13.charAt() :- charAt() method return the character at specified index position and if the index is out of range then it return empty string and if we not provide any index then it return 0th index element.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.charAt());
console.log(`Original : ${st1}`);
*/


// 14.charCodeAt() :- It return the number representing the unicode code of character.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
console.log(st1.charCodeAt(3));
*/


// 15.replace() :- replace() method return a new string with specified replaces.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
let news = st1.replace('is','we');
console.log(`Original : ${news}`);
*/


// 16.replaceAll() :- The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.

/*
let st1 = "This is a string";
console.log(`Original : ${st1}`);
let news = st1.replaceAll('is','we');
console.log(`Original : ${news}`);
*/