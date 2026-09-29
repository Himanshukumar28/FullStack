//Qs1. Write Poem! 
// function poem(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// };
// poem();

//Qs2. CREATE A FUNCTION TO ROLL A DICE & ALWAYS DISPLAY THE VALUE OF THE DICE (1 TO 6).
// function rollDice() {
//     const dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();


//function with argument
// function printName(name){
//     console.log(name);
// }
// printName("Himanshu");


//Qs3. CREATE A FUNCTION THAT GIVES US THE AVERAGE OF 3 NUMBERS.
// function calculateAvg(a , b , c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calculateAvg(2 ,4, 6);


//Qs4. CREATE A FUNCTION THAT PRINTS THE MULTIPLICATION TABLE OF A NUMBER.
// function printTable(n){
//     for(let i = n; i<=n*10; i += n){
//         console.log(i);
//     }
// }
// printTable(22);


//RETURN KEYWORD
// function sum(a , b){
//     return  a+ b;
// }
// console.log(sum(12 , 23));


//Qs5. CREATE A FUNCTION THAT RETURN THE SUM OF NUMBERS FROM 1 TO N.
// function getSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n ; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(getSum(3));


//Qs6. CREATE A FUNCTION THAT RETURN THE CONCATENATION OF ALL STRING IN AN ARRAY.
// let str = ["hii" , "hello" , "byy" , "!"];
// function concat(str){
//     let result = "";
//     for(let i = 0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

//SCOPE
// let sum = 54; //Global Scope
// function calSum(a , b){
//     let sum = a + b; //Function Scope 
//     console.log(sum);
// }
// calSum(3,5);
// console.log(sum);

//BLOCK SCOPE
//Variables declared inside a {} block cannot be accessed from outside the block.
// {
//     let a = 25;
// }
// console.log(a); // Not Accessible

// let age = 25;
// if(age >= 18){
//     let str = "adult";
// }
// console.log(str);  //Out Side the {} not access

// LEXICAL SCOPE
//A variable defined outside a function can be accessible inside another function defined after the variable declaration.
//the opposite is not true.
// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){ //function scope
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }


//Qs7 . What will be the OutPut
// let greet = "Hello"; //Global Scope

// function changeGreet(){
//     let greet = "namaste"; // functional Scope 
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);  //lexical Scope
//     }
//     //inner function not print because the not call
// }
// console.log(greet);
// changeGreet();


//FUNCTION EXPRESSION
// let sum = function(a , b){
//     return a + b;
// }
// sum(2 , 3);


//HIGHER ORDER FUNCTIONS
// function multipleGreet(func , count){
//     for(let i = 1; i<= count; i++){
//         func();
//     }
// }
// let greet  = function(){
//     console.log("Hello");
// }
// multipleGreet(greet , 10);
//multipleGreet(function() {console.log("namaste")}, 10);


//HIGHER ORDER FUNCTIONS RETURNS
// function oddOrEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n % 2 == 0));
//         }
//     } else if(request == "even"){
//         return function(n){
//             console.log(n % 2 == 0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let request = "odd";
// let fun = oddOrEvenTest(request);
// fun(3);


//METHODS
const calculator = {
    add: function(a , b){
        return a + b;
    },
    sub: function(a , b){
        return a -b;
    },
    mul: function(a , b){
        return a* b;
    }
};
console.log(calculator.add(5,8));

