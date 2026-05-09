(function chai(){
    console.log(`DB CONNECTED`);
}) ();

// IIFE: function here is immediately executed
//       Problem of global scope pollution is removed then that pollution we use this to remove it

( () => {
    console.log(`DB CPONNECTED`);
}) ();

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(result1);
console.log(result2);

