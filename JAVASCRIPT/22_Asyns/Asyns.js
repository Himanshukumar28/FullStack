//THIS IS SYNCHRONOUS 
// console.log("Ordering pizza");
// console.log("Order Placed");
// console.log("Pizza ready ho rha hai");
// console.log("Pizza deliver ho gya");
// console.log("Enjoy pizza");

//THIS IS ASYNCHRONOUS VERSION
// console.log("Ordering pizza");
// console.log("Order Placed");
// setTimeout(() => {
//     console.log("Pizza ready ho rha hai");
// } , 5000);
// setTimeout(() => {
//     console.log("Pizza deliver ho gya");
// } , 7000);
// console.log("Enjoy pizza");


//SETTIMEOUT CALLBACK FUNCTION
setTimeout(() => {
    console.log("ordering pizza");
    setTimeout(() => {
        console.log("ordering placed");
        setTimeout(() => {
            console.log("Pizza ready ho rha hai");
            setTimeout(() => {
                console.log("Pizza deliver ho gya");
                setTimeout(() => {
                    console.log("Enjoy pizza");
                } , 7000);
            } , 5000);
        } , 1000);
    } , 1000)
} ,1000)


