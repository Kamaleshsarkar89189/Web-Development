// Chapter 4 - Practice Set
// Problem 1
//What will the following print in javascript?
let str = "Kis\"" //Escape sequence character
console.log(str.length)

// Problem 2
// Explore the includes, startswith & endwith functions of a string.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// // Problem 3
//Write a program to convert a given string to lowercase
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// // Problem 4
//Extract the amount out of this string "Please give Rs 1000"
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)

// // Problem 5
//Try to change 4th character of a given string. Were you able to do it?
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable