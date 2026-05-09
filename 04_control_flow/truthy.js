const userEmail = "h@hitesh.com";

if(userEmail) {
    console.log("Yes");
} else{
    console.log("No");
}

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}  // o/p: Object is empty

// Nullish coalescing operator(??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1);  // o/p: 5

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");  // o/p: more than 80