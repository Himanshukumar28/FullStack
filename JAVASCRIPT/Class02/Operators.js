//1. Arithmetic Operators
//Used for mathematical calculations.
let a = 10;
let b = 3;
console.log(a+b); // 13
console.log(a % b); //1
console.log(a ** b); //1000

//2. Assignment Operators
//Used to assign values to variables.
let marks = 50;
marks += 10;
console.log(marks); //60

//3. Comparison Operators
//Used to compare two values.
//The result is always true or false.
//== vs === (Important)
console.log(5 == "5"); // true \Because it check only value.
console.log(5 === "5"); // False \Because it checks value + data type.

//4. Logical Operators
//Used to combine conditions.
//AND(&&) Both condition must be true.
let age = 20;
console.log(age > 18 && age < 30); //true
//OR(||) At least one condition should be true.
let marks1 = 90;
console.log(marks1 > 90 || marks1 == 90); //true
//NOT(!) Reverse the result.
let isLogin = false;
console.log(!isLogin); // true

//5. Unary Operators
//Works on a single value.
//Increment(++)
let x  = 5;
x++;
console.log(x); // 6
//Decrement(--)
let y = 5;
y--;
console.log(y); // 4

//6. Ternary Operator(Short if-else)
//condition ? true_value : false_value;
let age1 = 18;
let result = age1 >= 18 ? "Adult" : "Minor";
console.log(result);

//7. Bitwise Operators
//Works on binary numbers.
console.log(5 & 1);









