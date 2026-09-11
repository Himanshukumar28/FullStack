//for(initialisation; condition; updation){
    //do something
//}

//Print Odd Numbers (1 to 15)
// for(let i = 1; i<=15; i += 2){
//     console.log(i);
// }

//Print all Even Number(2 to 10)
// for(let i =2; i<=10; i +=2){
//     console.log(i);
// }
//BackWard
// for(let i = 10; i>=2; i -= 2){
//     console.log(i);
    
// }

//INFINITE LOOPS
// for(let i = 1; i>=0; i++){
//     console.log(i);
// }

//Print the Multiplication table for 5
// for(let i = 5; i<=50; i= i+5){
//     console.log(i);
// }
//USER
//let n = prompt("Write your number");
//n = parseInt(n);
// for(let i = n; i<=n*10; i=i+n){
//     console.log(i);
// } 

//NESTED FOR LOOP
// for(let i = 1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j =1; j<=3; j++){
//         console.log(j);
//     }
// }

//WHILE LOOP
// let i1 = 1;
// while(i1 <= 5){
//     console.log(i1);
//     i1++;    
// }

//FAVORITE MOVIE
// const favMovie = "DC";

// let guess = prompt("guess my favorite movie");

// while(guess != favMovie) 
//      if(guess == "quit"){
//          console.log("you quit");
//          break;
//  }
//  guess = prompt("wrong guess. please try again");
//}
// if(guess == favMovie){
//     console.log("congrats!");


//BREAK KEYWORD
// let i = 1;
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


//LOOPS WITH ARRAYS
// let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];

// fruits.push("pineapple") //push
// for(let i = 0; i<fruits.length; i++){
//     console.log(i , fruits[i]);
// }
// //BACKWARD
// for(let i = fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

//LOOPS WITH NESTED ARRAYS
// let heroes = [["ironman" , "spiderman" , "thor"] , ["superman" , "wonder woman" , "flash"]];

// for(let i = 0; i<heroes.length; i++){
//     console.log(`List ${i}`);
//     for(let j = 0;j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

//FOR OF LOOP
// let fruites = ["mango" , "apple" , "banana" , "orange" ,  "litchi"];
// for(fruit of fruites){
//     console.log(fruit);
// }

//NESTED FOR OF LOOP
// let heroes = [["ironman" , "spiderman" , "thor"] , ["superman" , "wonder woman" , "flash"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }


//TODO APP
let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("____________");
        for(let i =0; i<todo.length; i++){
            console.log(i , todo[i]);
        }
        console.log("____________");
    } else if(req == "add"){
        let task = prompt("please Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx , 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("Please enter your request");
}