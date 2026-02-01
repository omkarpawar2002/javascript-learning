/*
3.if else-if statements:-  
        The condition specified after the if keyword is true then the if block will get executed and if it failed then the next condition will check if it fails then check the next condition and so on.... and if it match with specified condition then the block will get executed and if not match then it skip all condition.
*/

let age = 38;
if (age < 2) {
    console.log(`It's a Baby`);
} else if (age < 8) {
    console.log(`It's a kid`);
} else if (age < 18) {
    console.log(`It's a teen`);
} else if (age >= 18) {
    console.log(`It's a adult`);
}