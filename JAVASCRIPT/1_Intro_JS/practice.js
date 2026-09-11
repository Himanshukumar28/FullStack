//Q1.How do you declare a variable in javascript?
// const , let , var
let name = "Alice";     // value can be changed
const age = 25;         // value cannot be reassigned
var city = "New York";  // older way, generally avoided in modern code
console.log(age)

//Q2.Difference between var, let, and const.
// | Feature          | var            | let         | const          |
// | ---------------- | -------------- | ----------- | -------------- |
// | Can change value | ✅ Yes          | ✅ Yes       | ❌ No           |
// | Scope            | Function scope | Block scope | Block scope    |
// | Re-declare       | ✅ Yes          | ❌ No        | ❌ No           |
// | Modern usage     | Less used      | Common      | Most preferred |

let marks = 90;
marks = 95;// allowed
// const rollNo = 76;
// rollNo = 77; // Error

//Q3.Can you change the value of a const variable?
//No.
// const salary = 50000;
// salary = 60000; //Error

//But if const contains an object or array, its internal values can change:
const arr = [1,2,3];
arr.push(4);
console.log(arr);

//Q4.What happens if you use a variable without declaring it?
x = 10;
console.log(x);

//Q5.Default value of an uninitialized variable.
let a ;
console.log(a); // undefined
//undefined means a variable exists but has no value assigned.

//Q6.Primitive data types in JavaScript
//JavaScript has 7 primitive data types:

//1.Number
let age = 20;
let price = 99.5;
//2.String
let name = "Himanshu";
//3.Boolean
let isStudent = true;
//4.Undefined
let x;
//5.Null
let data = null;
//6.BigInt
let big = 12345678901234567890n;
//7.Symbol
//Used for unique identifiers.

//Q7.Difference between null and undefined
//Undefined --> Variable declarerd but no value give.
let a;
console.log(a);
//Null
//Intentional empty value.
let user = null;
console.log(user);

//Q8.Is JavaScript statically typed or dynamically typed?
//JavaScript is dynamically typed.
let value = 10;
value = "Hello";
console.log(value);

//Q9.What is the output of typeof null?
console.log(typeof null);  //object
//This is a historical bug in JavaScript.

//Q10.What happens when you add a number and string?
let result = 5 + "10";
console.log(result); // 510
//Because JavaScript converts the number into a string.

//Q11.How to convert string into number?
//Number()  && parseInt()
let str = "100";
let num = Number(str);
console.log(num); // 100

//Q12 What is the Result of "7" - 2 in JavaScript?
let result = "7" - 2;
console.log(result); // 5


//Q13.How to check type of a variable?
//typeof
let name = "Himanshu";
console.log(typeof name);  // String
// typeof 10        // number
// typeof "hello"   // string
// typeof true      // boolean











