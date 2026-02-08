/*
Functions :- 
        Function is a reusable or independant block of code which get executed whenever we call it.
        Function can be defined by using the function reserved keyword.

    There are 2 types of function :- 
        1.Parameterized function
        2.Non-Parameterized function

    1.Parameterized function :- 
            Parameterized function means function with parameter i.e., paranthesis after the function name is not empty are known as parameterized function.

        Example :-    
                function fun_name(a,b){
                    console.log(a+b);
                }
                fun_name(10,20)

    2.Non-Parameterized function :-     
                Function with empty parameter i.e., paranthesis after the function name is empty are known as a non-parameterized function.

        Example :- 
                function fun_name(){
                    console.log("welcome");
                }
                fun_name()


        Inside parameterized and non-parameterized other types of function :- 
            1.Function declaration
            2.Function Expression
            3.Arrow Function
            4.Anonymus function
            5.Immediately invoked function expression


    return keyword :- 
        1.Whenever function wants to return a value then it using return keyword.
        2.Function always return a value to caller method.
        3.Always keep in mind write a return statement should be last of function because the code return after the return statement will not get executed , we call it as a unreachable code.
*/