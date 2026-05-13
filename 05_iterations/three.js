// for of loop

const arr = [1, 2, 3, 4]
for (const num of arr) {
    // console.log(num);
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    // console.log(greet);
}

// -----------

// Maps:- unique values, not iterable (key value pair)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // it contains unique values so this will not run

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ' :- ', value);
}