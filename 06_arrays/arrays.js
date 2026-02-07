/*
Array :-
        1.Array is an object / Non-primitive data type.
        2.Array is used to store the collection of values.
        3.Array can store multiple collection of data.
        4.Array represented by square brackets [].
        5.Through indexing we can access each element inside an array.
        6.Array is mutable so once we created we can change the elements of an array.

    Why we used arrays :-
        1.As we know array allow us to store different collection of data.
        2.Array store the data in an organized way so instead of storing the different kind of data we can store same[homogenous] data in an array so we can access it very easily.

    let newArray = [11,22,33,44];
    So here if we are using to print the array by using the template literals then it will be printed array in form of strings.
    console.log(`Original Array : ${newArray}`);
*/

// Here we are going to create an array
let arr = [10,20,30,40,50];
console.log(arr,typeof arr);

/*
    Indexing :-
            Each element inside an array has a specified position called as index.
            indexing always start from 0 not from 1.
*/
const newArr = [10,20,30,40,50];
console.log(newArr[0]);
console.log(newArr[1]);
console.log(newArr[2]);
console.log(newArr[3]);
console.log(newArr[4]);