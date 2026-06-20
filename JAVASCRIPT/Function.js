// greet();
// add(2,4);
// Sub(4,2);
// checkOddEven(76);
// checkArray_Num_EvenOrOdd();

// function greet(){
//     console.log("Hello World")
// }


// function add(a,b){
//     console.log(a + b)
// } 

// function Sub(a,b){
//     console.log(a - b)
// } 

// function checkOddEven(a) {
//   if(typeof a === 'number')  {
//     if(a % 2 ===0){
//         console.log('Even')
//     }
//     else if(a % 2 ===1){
//         console.log('Odd')
//     }
//     else{
//         console.log('Provide number to check')
//     }
//      }
//     else{
//         console.log('Provide DataType as Number')
//   }
// }

// function checkArray_Num_EvenOrOdd() {
//     const a = [1,2,3,4,5]
//     for(i = 0; i<5; i++ ){
//         if(a[i] % 2 == 0){
//             console.log(a[i] + 'Even')
//         }
//         else{
//             console.log(a[i] + 'Odd')
//         }
//     }
// }

// const arr = [1,2,3,4,5,6,7]
// function checkOddEvenInArr(a){
    
//     for(let i of a) {
//         if(i % 2 === 0){
//             console.log(`The number ${i} is Evan` )
//         }
//         else if(i % 2 === 1){
//             console.log(`The number ${i} is Odd` )
//         }
//         else{
//             console.log('Hello')
//         }
//     }
// }
// checkOddEvenInArr(arr);

// const arr1 = [1,2 , true, "Kashyap" , 5 ,6,{name:"Kashyap"}, [7,8]];
// function checkArrayType(x){
//     if(typeof x === 'object' && x.length > 0){
//         for(let i of x){
//             console.log(`Type of ${JSON.stringify(i)} is ${typeof i}`)
//         }
//     }
//     else{
//             console.log(`Send an array`)
//         }
// }
// checkArrayType(arr1);

// const arr = [1,2 , true, "Kashyap" , 5 ,6,{name:"Kashyap"}, [7,8]];

// const a = JSON.stringify(arr) //convert object  into string 
// console.log(typeof a)
// const d = JSON.parse(a) // convert string into object
// console.log(typeof d)

// const arr = [1,2,3,4,5]
// const arr1 = [6,7,8,9]

// const x = arr.at(0)

// const y = arr.concat(arr1)
// console.log(y)

// const arr = [1,2,3,4,5]
// const arr1 = [6,7,8,9]
// const arr2 = []
// for(let i = 1; i<(arr.length+ arr1.length); i++){
//     arr2[i] = i;
// }
// console.log(arr2)

// const arr = [1,2,3,4,5]
// const arr1 = [6,7,8,9]

// const x = [...arr, ...arr1]  // spread operator
// console.log(x)


const arr = [1,2,3,4,5]
const arr1 = [6,7,8,9]
const [x,y, ...rest] = arr; //Rest operator 
console.log(x,y,...rest)




