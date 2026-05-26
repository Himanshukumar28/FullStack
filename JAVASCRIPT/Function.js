greet();
add(2,4);
Sub(4,2);
checkOddEven(76);
checkArray_Num_EvenOrOdd();

function greet(){
    console.log("Hello World")
}


function add(a,b){
    console.log(a + b)
} 

function Sub(a,b){
    console.log(a - b)
} 

function checkOddEven(a) {
  if(typeof a === 'number')  {
    if(a % 2 ===0){
        console.log('Even')
    }
    else if(a % 2 ===1){
        console.log('Odd')
    }
    else{
        console.log('Provide number to check')
    }
     }
    else{
        console.log('Provide DataType as Number')
  }
}

function checkArray_Num_EvenOrOdd() {
    const a = [1,2,3,4,5]
    for(i = 0; i<5; i++ ){
        if(a[i] % 2 == 0){
            console.log(a[i] + 'Even')
        }
        else{
            console.log(a[i] + 'Odd')
        }
    }
}

const arr = [1,2,3,4,5,6,7]
function checkOddEvenInArr(a){
    
    for(let i of a) {
        if(i % 2 === 0){
            console.log(`The number ${i} is Evan` )
        }
        else if(i % 2 === 1){
            console.log(`The number ${i} is Odd` )
        }
        else{
            console.log('Hello')
        }
    }
}
checkOddEvenInArr(arr);


