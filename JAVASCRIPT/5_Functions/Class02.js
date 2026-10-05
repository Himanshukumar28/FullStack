//THIS KEYWORD
// const student = {
//     name: "himanshu",
//     age: 20,
//     eng: 70,
//     math: 75,
//     phy: 70,
//     getAvg(){
//         console.log(this);

//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// student.getAvg();


//TRY & CATCH
// console.log("hello");
// console.log("hello");
// //let a = 5;
// try {  //through error
//     console.log(a);
// }catch(err){  //catch the error
//     console.log("catch an error.. a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello3");


//ARROW FUNCTION
// const sum = (a , b) => {
//     console.log(a + b);
// };
// sum(3 , 6);

// const pow = (a , b) => {
//     //console.log(a ** b);
//     return a ** b;
// }
// //pow(2,4);
// console.log(pow(2 ,4 ));


//ARROW FUNCTION IMPLICIT RETURN 
// const mul = (a , b) => a * b;
// console.log(mul(2 , 3));


//SET TIMEOUT
// console.log("hi there!");
// setTimeout(() => {
//     console.log("Apna College");
//     } , 4000);
// console.log("Welcome to");


//SET INTERVAL
// setInterval(() => {
//     console.log("Apna College");
// } , 2000);
//to stop clearInterval(id)

// let id  = setInterval(() => {
//     console.log("Apna College");
// } , 2000);
// console.log(id);
// clearInterval(id);

//THIS WITH ARROW FUNCTION
// const student = {
//     name: "aman" ,
//     marks: 95 ,
//     prop: this , //global scope
//     getName: function (){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); //parent's scope -> Window
//         return this.marks;
//     },
//     getInfo1: function (){
//         setTimeout(() => {
//             console.log(this);  //student
//         } , 2000);
//     },
//     getInfo2: function (){
//         setTimeout( function() {
//             console.log(this);  //window
//         } , 2000);
//     },
// }


//PRACTICE Qs
//Write an arrow function that return the square of a number 'n'.
// const square = (n) => n*n;
// console.log(square(4));

//Write a function that prints "hello World" 5 Times at intervals of 2s each.
// let id = setInterval (() => {
//     console.log("Hello World");
// } , 2000)

// setTimeout(() => {
//     clearInterval(id);
// } , 10000);

// CHECK EVEN OR NOT
// let num = 4;
// const isEven = (num) => num % 2 == 0;

