// function sayMyName() {
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("L");
// }
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers()  // o/p: NaN
// addTwoNumbers(3, 4)  // o/p: 7
// addTwoNumbers(3, "4")  // o/p: 34
// addTwoNumbers(3, "a")  // o/p: 3a

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  // o/p: Result:  undefined

// function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     return result
// }
// const results = addTwoNumber(3, 5)
// console.log("Result: ", results);  // o/p: Result:  8

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Harshal"));  // o/p: Harshal just logged in
// console.log(loginUserMessage());  // o/p: undefined just logged in

// function loginUserMessages(username){
//     if(!username) {
//         console.log("Please enter a Username");
//         return
//     }
// }
// console.log(loginUserMessages());  // o/p: Please enter a Username


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));  // o/p: [ 200, 400, 500, 2000 ]

const user = {
    username: "harshal",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)  // o/p: Username is harshal and price is 199

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondArray(getArray) {
    return getArray[1]
}
console.log(returnSecondArray(myNewArray));  // o/p: 400
