// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]);
    console.log(key); 
    
}