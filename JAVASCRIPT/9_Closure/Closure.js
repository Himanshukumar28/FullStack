function cart(){
    let total = 0;
    return function (price){
        total += price;
        console.log(total);
    };
}

let cartA = cart();
cartA(100);
cartA(200);
cartA(400);

console.log("============== Cart B total ================");

let cartB = cart();
cartB(500);
cartB(1000);
cartB(1100);
