let str1 = "Hello";
let str21 = '     leooo';
let str3 = `hdiwdi   `;
let str4 = '  Himanshu Kumar ' ;

//Print length
console.log(str1.length);

//Starting Space Remove
console.log(str21.trimStart().length);

//Ending Space Remove
console.log(str3.trimEnd().length);

//Start and End Remove Space Use
console.log(str4.trim().length);

//Index of agar woh string exist karta hein toh uska index mil jayega otherwise it will return -1
console.log(str4.indexOf("Kumar"));

//String me hai to true nhi to false
console.log(str4.includes("Kumar"));

//Slice last index se
let str5 = "Himanshu";
console.log(str5.slice(0,4));

//slice mein hum negative value de sakte hai
// let str3 = str1.slice(-3);
// console.log(str3);


//substring me negative index support nahi hein woh usee default 0 set kar deta hein 
console.log(str1.substring(-3));

let fruits = "apple mango graphs banana";

let result = fruits.split(" ");
console.log(result);








