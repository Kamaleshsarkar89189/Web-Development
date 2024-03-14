/*
Arrays
    
Arrays are variables which can hold more than one value.

    const fruits = ["apple", "banana", "mango"]
    const a1 = [7, "Kisan", true] //Can be different types

    Accessing values

    let numbers = [1,2,3,4,5]
    number[0] ---> 1
    number[1] ---> 2
    number[2] ---> 3 
    and so on...


    Finding the length

        let numbers = [1,2,3,4]
        numbers [0] ---> 1
        numbers.lenght ---> 4

    Changing the values
        let numbers = [7,2,40,9]
        numbers[2] = 8 //"numbers" now becomes [7,2,8,9] Arrays are multtiple .Arrays can be changed

    In Javascript, arrays are objects. The typeof operator on arrays return object

        const n = [1,5,7]
        typeof n ---> Return "Object"

    Arrays can hold many values under a single name

Array methods

    There are some important array method in JavaScript some of them are as follows :

    1. toString() ---> Convert an array to a string of comma separated values

        let n = [1,4,8]
        n.toString() --> 1,4,8

    2. join() -->joins all the array elements using a separator

        let n = [4,7,9]
        n.join(" - ")  ---> 4 - 7 - 9

    3. pop() ---> removes last element from the array

        let n = [1,2,3]
        n.pop() ---> updates the original array returns the popped value

*/