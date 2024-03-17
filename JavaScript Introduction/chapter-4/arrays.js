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

    4. push() --> Adds a new element at the end of the array

        let a = [6, 5,6,7,8]
        a.push(9) ---> modifies the original array
                |--> return the new array lenght

    5. shift() ---> Removes first elemnt and returns it

    6. unshift() ---> Adds element to the begennning. Returns new array lenght

    7. delete ---> Array elements can be deleted using the dlete operator

                let d = [7,8,9,5]
                delete d[1] ---> delete is an operator


    8. concat() ---> Used to join arrays to the given array

        let a1 = [1,2,3]
        let a2 = [4,5,6]
        let a3 = [9,3,7]

        a1.concat (a2, a3) ---> Returns [1,2,3,4,5,6,9,3,7]
            Returns a new array
            Does not change existing arrays

    9. sort() ---> sort() method is used to sort an array alphabetically.

        let a = [7,9,8]
        a.sort()  ---> a change to [7,8,9]
                       [modify the original array]
    
        sort() takes an optional compare function. If this function is provided as the first
        argument, the sort() function will consider these values (the values returned from the 
        compare function) as the basis of sorting.

    10. splice() ---> splice can be used to add new items to an array

        const numbers = [1,2,3,4,5]
              numbers.splice(2,1,23,24) // in case of 2 porsition to add, in case of 1 No of elemnts to remove, 23,24 are to be added
              -->Returns dleted
              items, modify the 
              array

    11. slice() ---> slices out a piece from an array. It creates a new array

            const num = [1,2,3,4]
            num.slice(2) ---> [3,4]
            num.slice(1,3) --> [2,3]

    12.reverse() ---> Revrses the elements in the source array

    Looping through Arrays
            
            Arrays can be looped through using the classical JavaScript for loop or through some other methods discussed below

            1. forEach loop ---> Calls a function, once for each array element

            const a = [1,2,3]
            a.forEach((value, index, array){
                //function logic
            });
            
            2. map() ---> Creates a new array by performing some operation on each array element.

                const a = [1,2,3]
                a.map((vector, index, array){
                    return value*value;
                })

            3. filter() ---> Filters an array with values that passes a test. Creates a new array

                const a = [1,2,3,4,5]
                a.filter(greater_then_5) 

            4. reduce method ---> Reduces an array to a single value

                const n = [1,8,7,11]
                let sum = number.reduce(add) --> a function   //(sum = 1+8+7+11)

            5. Array.from ---> Used to create an array from any other object

                Array.from("Kisan")

            6. for .... in --> for- in loop can be used to get the keys from an array.

*/