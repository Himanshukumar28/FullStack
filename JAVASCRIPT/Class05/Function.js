// syntax
//  function functionName(){
//     // code
//  }

// function greet(){
//     console.log("Hello");
//     }
//     greet();


// function CalculateSum(num1, num2){ 
//  // num1 and num2 yeah apke parameters hein
//     let sum = num1 + num2;
//     console.log(sum);
// }    
// CalculateSum(122,231); //arguments 100 and 200 arguments hein
// CalculateSum(11,22);


//Default Parameters
// function CalculateSum(num1= 10, num2 = 30){
//     let sum = num1 + num2;
//     console.log(sum);
// }
// CalculateSum();
// CalculateSum(50);
// CalculateSum(50,40);
// CalculateSum(5);
// CalculateSum(undefined, 50);

// RETURN KEYWORD

// function CalculateSum(num1 , num2){
//     console.log("We are Adding the two Number");
//     console.log(num1 , num2);
//     return num1 + num2;
//     return num1 // Ignore
//     return num2 //Ignore
// console.log(calculateSum(10,15)); // esha maat karna
// }
// let res = CalculateSum(12,23);
// console.log(res);

// function getUserData(){
//     let User = {
//         name: "Joginder",
//         age: 25, 
//         email: "Joginder@gmail.com", city: "bhopal",
//     };
//     return User;
// }
// let userData = getUserData();
// console.log(userData);



//How to convert function declaration into function expression
// Function Expression
// let greet =  function () {
//     console.log("Hello Student");
// };
// greet();

// Make Function Expression
// let calculateSum = function (num1, num2) {
//   // num1 and num2 yeah apke parameters hein
//   let sum = num1 + num2;
//   console.log(sum);
// };

// calculateSum(15, 16);

// How to convert function expression to Arrow Function
// let greet = () => {
//   console.log("Hello students");
// };
// greet();

// Arrow Function
// let calculateSum = (num1, num2) => {
//   // num1 and num2 yeah apke parameters hein
//   let sum = num1 + num2;
//   console.log(sum);
// };
// calculateSum(15, 16);
// console.log("=========Short Arrow Function===========================");

// let calculateSum1 = (num1, num2) => num1 + num2;
// let calculateSum1 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(calculateSum1(15, 25));


//Calculate the square of a number 
// let square = (val) => val*val;
// console.log(square(5));


//Calculate Marks , percentage, attendance
// function ReportCard(sub1, sub2, sub3, sub4, sub5){
//     let attendance = 75;
//     let marks = sub1+sub2+sub3+sub4+sub5;
//     let percentage = (marks/500)*100;
//     return {attendance , percentage, marks}
// }
// let studentReport = ReportCard(33,45,67,87,43);
// console.log("total marks:" , studentReport.marks);
// console.log("percentage:" , studentReport.percentage);
// console.log("attendance:" , studentReport.attendance);




