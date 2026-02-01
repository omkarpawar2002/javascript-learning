/*
2.while loop :- 
        When we don't know the exact number of time the ieration is required then we used a while loop.

*/

// suppose i want to calculate the number from 1 to 10
let count = 1;
let total = 0;
while (count < 11){
    total += count;
    count += 1;
}

console.log(`Total is :- ${total}`);