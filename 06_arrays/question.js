// 1. Create an array of numbers.

const arrNumbers = [10, 20, 30, 40];
console.log(arrNumbers);

// 2. Print all elements of an array.

const arrNumbers1 = [10, 20, 30, 40];
for (let i of arrNumbers1) {
    console.log(i);
}

// 3. Find length of an array.

const arrNumbers2 = [10, 20, 30, 40];
console.log(`Length of arrNumbers2 is ${arrNumbers2.length}`)

// 4. Add element to end of array.

const arrNumbers3 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers3);
arrNumbers3.push(101)
console.log("Updated Array : ", arrNumbers3);

// 5. Add element to start of array.

const arrNumbers4 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers4);
arrNumbers4.unshift(101)
console.log("Updated Array : ", arrNumbers4);

// 6. Remove last element from array.

const arrNumbers5 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers5);
arrNumbers5.pop()
console.log("Updated Array : ", arrNumbers5);

// 7. Remove first element from array.

const arrNumbers6 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers6);
arrNumbers6.shift()
console.log("Updated Array : ", arrNumbers6);

// 8. Find sum of array elements.

const arrNumbers7 = [10, 20, 30, 40];
let totalSum = 0;
for (let i of arrNumbers7) {
    totalSum += i;
}
console.log("Total Sum Of Array :- ", totalSum);

// 9. Find maximum element in array.

const arrNumbers8 = [10, 20, 30, 40];
let highestNumber = arrNumbers8[0];
for (let i of arrNumbers8) {
    if (i > highestNumber) {
        highestNumber = i;
    }
}
console.log("Maximum Element in Array :- ", highestNumber);

// 10. Find minimum element in array.

const arrNumbers9 = [10, 20, 30, 40];
let lowestNumber = arrNumbers9[0];
for (let i of arrNumbers9) {
    if (i < lowestNumber) {
        lowestNumber = i;
    }
}
console.log("Minimum Element in Array :- ", lowestNumber);

// 11. Reverse an array.

const arrNumbers10 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers10);
arrNumbers10.reverse()
console.log("Updated Array : ", arrNumbers10);

// 12. Sort an array.

const arrNumbers11 = [34, 56, 7, 3, 12, 4, 67, 78];
console.log("Original Array : ", arrNumbers11);
arrNumbers11.sort((a, b) => {
    return a - b;
})
console.log("Updated Array : ", arrNumbers11);

// 13. Check if an element exists in array.

const arrNumbers12 = [10, 20, 30, 40];
console.log("Original Array : ", arrNumbers12);
console.log("Updated Array : ", arrNumbers12.includes(20));
console.log("Updated Array : ", arrNumbers12.includes(22));

// 14. Count even numbers in array.

const arrNumbers13 = [10, 20, 30, 40, 11, 12, 13];
console.log("Original Array : ", arrNumbers13);
let countEvenNumber = 0;
for (let i of arrNumbers13) {
    if (i % 2 == 0)
        countEvenNumber += 1;
}
console.log(`Total ${countEvenNumber} Even Numbers Are Present.`)

// 15. Count odd numbers in array.

const arrNumbers14 = [10, 20, 30, 40, 11, 12, 13];
console.log("Original Array : ", arrNumbers14);
let countOddNumber = 0;
for (let i of arrNumbers14) {
    if (i % 2 != 0)
        countOddNumber += 1;
}
console.log(`Total ${countOddNumber} Odd Numbers Are Present.`)

// 16. Merge two arrays.

let arr1 = [10, 20, 30];
let arr2 = [11, 22, 33];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// 17. Remove duplicate elements from array.

let arr4 = [10, 11, 12, 13, 12, 12, 14];
console.log("Original Array :- ", arr4);
let newArr4 = [];
for (let i of arr4) {
    if (!(newArr4.includes(i))) {
        newArr4.push(i);
    }
}
console.log(newArr4);

// 18. Find index of an element.

const arr5 = [10, 11, 12, 13, 14, 15];
console.log(`${arr5[3]} has index position ${arr5.indexOf(arr5[3])}`);

// 19. Create array of squares.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((element) => {
    return element ** 2;
})
console.log(squares);

// 20. Create array of even numbers.

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array :- ", arr6);
let evenArr6 = [];
for (let i of arr6) {
    if (i % 2 == 0) {
        evenArr6.push(i);
    }
}
console.log("Even Elements :- ",evenArr6);