//variableName arrayName = []

//mujhe agar kisi bhi value ko access karna hai for that I am using index
//Index always start from 0.


let animal = ["Lion " , "Tiger" ,"bear" , "dog"];
//console.log(animal);

//Arrays are Mutable
// animal[0] = 'Banana';
//console.log(animal);

//====================
//METHOD
//====================

//push add the value in the last of the array
//animal.push("cat");

//unshift add the value in the start of the array
//animal.unshift("cat");

//pop() method is use to delete the value from last
//animal.pop();

//shift() is used to delete the value from first
//animal.shift();

//indexof() return index of something
//animal.indexOf("bear");

//includes(): Search for a value . if present return true else false.
//animal.includes("dog")

//concat(): merge 2 array
// let primary = ['red' , 'yellow' , 'blue' , 'black'];
// let secondary = ['green' , 'orange', 'white'];
// console.log(primary.concat(secondary));

//Reverse(): reverse an array
//animal.reverse();

//slice(): copies a portion of an array
// animal.slice();
// animal.slice(2);
// animal.slice(2, 3);
// animal.slice(-2);

//splice(): remove / replace / add element in place
//original array me changes karta hai
//(1st value add karta hai, 2nd delete karta hai)
//animal.splice(3);
//animal.splice(0,1);
//animal.splice(0,1 , "elephant" , "horse");
//animal.splice(1 , 0 , "goat");

//sort(): sort an array
//only work "Character && String" 
animal.sort();


//NESTED ARRAY
let nums = [[2, 4] , [3, 6] , [4, 8]];
console.log(nums[0][0]);



//  Practice Qs.
let months = ['january' , 'july' , 'march' , 'august']
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
//console.log(months);

//Practice Qs.
//same as upper Qs.
let days = ['sunday' , 'monday' , 'tuesday' , 'wednesday'];
days.splice(0,2 , "friday" , "saturday");
console.log(days);

//Practice Qs.
//Return the index of the "javascript " from the given array , if it was reversed.
let lang = ['c' , 'c++' , 'html' , 'javascript' , 'python' , 'java' , 'c#' , 'sql'];
let ans = lang.reverse().indexOf("javascript");
//console.log(ans);

//Practice Qs.
//CREATE A NESTED ARRAY TO SHOW THE FOLLOWING TIC-TAC-TOE GAME STATE.
let game = [['X' , null , 'O'], [null , 'X' , 'O'] , ['O' , null , 'X']];
game[0][1] = 'O';
console.log(game);






