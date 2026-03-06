// // let a = 300
// // var c = 300

// // if(true) {
// //     let a = 10
// //     const b = 20
// //     var c = 30
// // }

// // console.log(a);  // o/p: 300
// // // console.log(b);  // o/p; error
// // console.log(c);  // o/p: 30 -> this is problem of var in js

// function one() {
//     const username = "harshal"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);  // o/p: error
//     two()  // after one() gets execute then two() gets executed
// }
// one()  // o/p: harshal

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        console.log(username + website);  // o/p: hitesh youtube
    }
    // console.log(website);  // o/p: error
}
// console.log(username);  // o/p: error
