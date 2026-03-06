const user = {
    username: "Hitesh",
    price: 399,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()  // o/p: Hitesh, welcome to website
user.username = "Sam"
user.welcomeMessage()  // o/p: Sam, welcome to website
console.log(this);

function chai() {
    let username = "hitesh"
    console.log(this.username);
}
chai()  // o/p: {}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));  // o/p: 7

const addTwos = (num1, num2) => (num1 + num2)
console.log(addTwos(3, 5));  // o/p: 8

const add = () => ({username: "hitesh"})
console.log(add());  // o/p: { username: 'hitesh' }