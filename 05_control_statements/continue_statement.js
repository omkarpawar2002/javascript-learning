/*
continue statements :- 
        continue statements are used to skip the current iteration and jump on the next iteration.
*/

for (let i = 0; i < 11; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}