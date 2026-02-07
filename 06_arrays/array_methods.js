
/*
    Methods :-
        As we know arrays are mutable so there are some built in methods so via using them we can add , update , remove the elements of array.
*/

// 1.push :- push method add zero or more elements to the end of an array and it returns the new length of an array.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let count = newArray.push(101,102,103);
console.log(newArray);
console.log(count);
*/


// 2.unshift() :- unshift() method add zero or more elements to the begining of an array and return a new length of an array.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let count = newArray.unshift(101,201,301);
console.log(newArray);
console.log(count);
*/


// 3.pop() :- pop() method is used to remove and return the last element of an array. If the array if empty then it return undefined.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.pop();
console.log(newArray);
console.log(element);
*/


// 4.shift() :- shift() method is used to remove and return the first element of an array. If the array if empty then it return undefined.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.shift();
console.log(newArray);
console.log(element);
*/


// 5.length :- length property is used to return the total length of an array.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let newArrayLength = newArray.length;
console.log(newArrayLength);
*/


// 6.reverse() :- reverse() method returns the Array in reverse order means it modified the original array.

/*
let newArray = [11,22,33,44];
console.log(newArray);
newArray.reverse();
console.log(newArray);
*/


// 7.concat() :- The concat() method returns a new array by merging two or more values/arrays.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.concat([101,201,301,401],1111,2222);
console.log(newArray);
console.log(element);
*/


// 8.indexOf() :- indexOf() method return the first index of an occurance specified in an array and if not present then it return -1.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.indexOf(33);
console.log(newArray);
console.log(element);
*/


// 9.lastIndexOf() :- lastIndexOf() method returns the last index of occurance of specified element in an array.

/*
let newArray = [11,22,33,44,22];
console.log(newArray);
let element = newArray.lastIndexOf(22);
console.log(newArray);
console.log(element);
*/


// 10.includes() :- includes() method checks the array contain the specified element or not it return True if it contain and if not then return false.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.includes(22);
console.log(newArray);
console.log(element);
*/


// 11.toString() :- toString() method convert an array to a string of comma seperated values.

/*
let newArray = [11,22,33,44];
console.log(newArray);
let element = newArray.toString();
console.log(newArray);
console.log(element,typeof element);
*/


// 12.slice() :- slice() return the new array with extracted elements. Both start and end index is optional if not provided then it started from 0th index to last index.

/*
let newArray = [11,22,33,44,55,66,77,88,99];
console.log(newArray);
let element = newArray.slice(1,4);
console.log(newArray);
console.log(element);
*/


// 13.splice() :- splice() method modifies an array [add,remove,replace elements] and return the array containing deleted elements.

/*
let newArray = [11,22,33,44,55,66,77,88,99];
console.log(newArray);
let element = newArray.splice(4,2,21);
console.log(newArray);
console.log(element);
*/


// 14.copywithin() :- copywithin() methods copies array elements from one position to another in given array
// syntax :-    arr.copyWithin(target, start, end)

/*
let newArray = [11,22,33,44,55,66,77,88,99];
console.log(newArray);
let element = newArray.copyWithin(5,1,3);
console.log(newArray);
console.log(element);
*/


// 15.sort() :- The sort() method sorts the items of an array in a specific order (ascending or descending).

/*
// Example 1
let arr = ["Iron Man","Captain America","Thor","Hulk","Scarlet Witch"];
console.log(arr);
arr.sort();
console.log(arr);

// Example 2
let numbers = [34,56,67,3,25,7,34,23,67,87,3];
console.log(numbers);
numbers.sort((a,b) => {
    return a - b;
})
console.log(numbers);
*/


// 16.forEach() :- forEach() method is used to iterate over an array and apply a callback function on every elements inside an array.

/*
let arr = [10,20,30,40,50]
arr.forEach((ele,index) => {
    console.log(`Element is ${ele} with index ${index}`);
})
*/


// 17.filter() :- filter() method is used to filter out the elements inside an array on the basis of testing function and it returns a new array.

/*
let arr = [1,2,3,4,5,6,7];
let newArr = arr.filter((element) => {
    return element % 2 == 0
})
console.log(newArr);
*/


// 18.map() :- map() method calls a function once for each element inside an array.

/*
let arr = [10,20,30,40,50,60]
let newArr = arr.map((ele) => {
    return ele+1;
})
console.log(newArr);
*/


// 19.reduce() :- reduce() will return a single value

/*
let num = [1,2,3,4,5,6,7,8,9,10];
let res = num.reduce((ele,acc) => {
    return ele+acc;
})
console.log(`Total Output Is :- ${res}`);
*/


/*

Explore 

Search & condition methods:

find() and findIndex()

every() and some()

Advanced utilities:

flat() and flatMap() (for nested arrays)

Array.from() and Array.of() (array creation helpers)

fill() (replace values in a range)

entries(), keys(), values() (iterators)

*/