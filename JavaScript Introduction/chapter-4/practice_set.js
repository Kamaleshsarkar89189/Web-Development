// Chapter 5 Practice Set
// Practice Problem 1
//Create an array of numbers and take input from the user to add numbers to this array

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// rl.question("Enter a number : ", function(answer){
//     let a = parseInt(answer)
//     arr.push(a)
//     console.log(arr)
//     rl.close();
// })


// Practice Problem 2
//Keep adding numbers to the array in 1 until 0 is added to the array
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//   a = prompt("Enter a number") //It does't work in node.js
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)


// Practice Problem 3
//Filter for numbers divisible by 10 from a given array.
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// Practice Problem 4
//Create an array of square of given numbers.
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)

// // Practice Problem 5
//Use reduce to calculate factorial of a given numbers from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)