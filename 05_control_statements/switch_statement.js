/*
switch statement :- 
        Switch statements are execute a block of code based on the value specified in expression.
*/

let user = 'student';
switch(user){
    case 'admin':
        console.log("Admin Lock");
        break
    case 'manager':
        console.log("Manager Lock");
        break
    case 'student':
        console.log("Student Lock");
        break
    default:
        console.log("Not match");
}