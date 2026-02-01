/*
4.if else-if else statements:-  
        The condition specified after the if keyword is true then the if block will get executed and if it failed then the next condition will check if it fails then check the next condition and so on .., If all the condition are failed then the last else will get executed.
*/

let age = 66;
if (age < 2) {
    console.log(`It's a Baby`);
} else if (age < 8) {
    console.log(`It's a kid`);
} else if (age < 18) {
    console.log(`It's a teen`);
} else if (age < 65) {
    console.log(`It's a adult`);
}else{
    console.log(`It's an old`)
}