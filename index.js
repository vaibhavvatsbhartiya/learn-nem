// pahle use hota tha 
// const lib = require('./lib');


//  but ab
import { sum, diff } from "./lib.js";
import * as fs from 'node:fs';



// const txt = fs.readFileSync('demo.txt', "Utf-8"); // read our file but have to specify the format
// console.log(txt);
// but the problem is k yeh bhout time consuming hai if file bhout bde hai ya server ko request kr rahe hsi data k liye 


// to solve this problem we need to use callbacks or promises 
// here i use callback 
fs.readFile('demo.txt', "Utf-8", (err, data) =>{
    console.log(data);
});

console.log(sum(2,3),"and", diff(5,3));


// make sure to always use async code to save as much time as u can 
// because ik sync code bhout time consuming hota hai.




// ab bhi ik dikat yeh hai k server ko baar baar open kr close kr
//  so irritating
//  so use nodemon
console.log(sum(2,3),"and", diff(5,3));
console.log(sum(2,3),"and", diff(5,3));
console.log(sum(2,3),"and", diff(5,3));