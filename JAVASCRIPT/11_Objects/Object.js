// let studentName = "himanshu";
// let studentAge = 20;
// let studentEmail = "himanshukashyapg01@gmail.com";

// const student = {
//     name: "Himanshu",
//     age: 20, 
//     city: "Bhopal"
// };
// console.log(student);

//Create an object literal for the properties of twitter post which includes-
//username , content , likes , reports , tags
const post = {
    username: "himanshu_kashyap.08" ,
    content: "Enjoy your life" , 
    likes: 180, 
    reports : 5 ,
    tags: ["@kashyap___" , "@himanshukashyap"]
};
//console.log(post.likes);
//console.log(post["likes"]);

// const obj = {
//     1: "a", 
//     2: "b", 
//     true: "c",
//     null: "d" ,
//     undefined: "e"
// };
// console.log(obj);

//ADD, DELETE AND UPDATE VALUE
// const studentInfo = {
//     name: "Himanshu" ,
//     age: 20 , 
//     marks: 70.20,
//     city: "Bhopal"
// };
// console.log(studentInfo);
// //update
// studentInfo.city = "darbhanga";
// //Add
// studentInfo.gender = "mail";
// //Delete
// delete studentInfo.marks;


//NESTED OBJECT //  OBJECT OF OBJECTS
// const classInfo = {
//     aman : {
//         grade: "A+",
//         city: "Delhi"
//     },
//     chaman : {
//         grade: "A",
//         city: "Mumbai"
//     },
//     raman : {
//         grade: "B+",
//         city: "Pune"
//     }
// };
//console.log(classInfo.aman.city);


//ARRAY OF OBJECTS
// const classInfo = [
//     {
//         name: "aman" ,
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "Rohit" ,
//         grade: "A",
//         city: "Mumbai"
//     },
//     {
//         name: "mohit" ,
//         grade: "B+",
//         city: "Pune"
//     }
// ];
// console.log(classInfo[0].city);
// classInfo[0].gender = "mail";
// console.log(classInfo);

//MATH OBJECT
//properties
// console.log(Math.PI);
// console.log(Math.E);
// //Methods
// console.log(Math.abs(-5)); // absolute value deta hai negative sign hta ke
// console.log(Math.pow(2,4)); //a**b
// console.log(Math.floor(5.99999));  // round of nearest smallest Int value deta h
// console.log(Math.ceil(5.99999));  ///round of nearest largest Int value deta h
// console.log(Math.random(9));  //randomly value deta hai 0 se 1 ke beach ke value dega but usme 1 nhi hoga because 1 exclusive h

//Random Integer from 1 to 10
// let num = Math.random();
// num = num*10;
// num = Math.floor(num);
// num = num+1
// console.log(num);

//IN ONE LINE
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

//Qs. GENERATE A RANDOM NUMBER BETWEEN 1 TO 100.
//let random = Math.floor(Math.random() * 100) + 1;
//console.log(random);

//Qs. GENERATE A RANDOM NUMBER BETWEEN 21 TO 25
//let num = Math.floor(Math.random() * 5) + 21;
//console.log(num);


//PRACTICE QUE
//Qs1. Create a program that generates a random number representing a dice roll.
      //[The number should be between 1 and 6].
    // const dice = Math.floor(Math.random() *6) + 1;
    // console.log(dice);


//Qs2. Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name.    
    // const car = {
    //     name: "Scorpio" ,
    //     model : "Scorpio-N_facelift" ,
    //     color : "Black"
    // };
    // console.log(car.name);
    

//Qs3. Create an object Person with their name, age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States.    

const person = {
    name : "John" ,
    age : 20 , 
    city : "berlin"
};
person.city = "New Your";
person.country = "United States"
console.log(person);






