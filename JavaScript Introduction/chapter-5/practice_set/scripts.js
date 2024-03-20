//Write a program using prompt function to take input of age as a value from the user and use 
//alert to tell him if he can drive!
//Question 1
/*
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive = (age)=>{
    return age>=18?true:false
}
if(canDrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You can't drive")
}
*/

//Question 2
//In Q1 use confirm to ask the user if he wants to see the prompt again.

/*
let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
    
}
while(runAgain){
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    
    if (canDrive(age)) {
        alert("Yes you can drive")
    }
    else {
        alert("You can't drive")
    }
    runAgain = confirm("Do you want to play again?")
}
*/

//Question 3
//In the previous question, use console.error to log the error if the age entered is negative or Zero or above 150
/*
let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false
    
}
while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age <= 0){
        console.error("You have entered a invalid age");
        break;
    }
    if(age > 150){
        console.error("Something Wrong!");
        break;
    }
    
    if (canDrive(age)) {
        alert("Yes you can drive")
    }
    else {
        alert("You can't drive")
    }
    runAgain = confirm("Do you want to play again?")
}
*/

//Question 4
//Write a program to change the url to youtube.com(Redirect) if user entred a number greater than 4





//Question 5
//Change the background of the page to yellow red or any other color based on user input through prompt

// document.addEventListener("DOMContentLoaded", function () {
//     let color = prompt("Enter the page background color");
//     document.body.style.background = color;
// });

let color = prompt("Enter the page background color");
document.body.style.background = color;
