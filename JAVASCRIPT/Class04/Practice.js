//Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
// let arr = [1,2,3,4,5,2,3];
// let num = 2;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i , 1);
//     }
// }
// console.log(arr);

//Qs2. Write a JS program to find the no of digits in a number.
// let number = 287152;

// let count = 0;

// while(number > 0){
//     number = Math.floor(number/10);
//     count++;
// }
// console.log(count);

//Qs3. Write a JS program to find the sum of digits in a number.
// let number = 287152;
// let sum = 0;
// //let temp = number;

// while (number > 0) {
//     let digit = number % 10
//     sum = sum + digit;
//     number = Math.floor(number/10);
// }
// console.log(sum);


//Qs4. Print the factorial of a number n.
// let n = 5;
// let fac = 1;

// for(let i = 1; i<=n; i++){
//     fac = fac *i;
// }
// console.log(`factorial of ${n} if ${fac}`);


//Qs5. Find the largest number in an array with only positive numbers.
let arr = [23,45,666,4,3,56,6,4354];
let largest = 0;
for(let i = 0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);
