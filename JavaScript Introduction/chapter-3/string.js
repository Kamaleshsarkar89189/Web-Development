/*
Strings

    Strings are used to store and manipulate text.String can be created using the following syntax.

        let name = "Kisan" --> Creates a strings
        name lenght   --> This property prints lenght of the string

    Strings can also be created using single quotes
    
        let name = 'Kisna'

    Template Literals
        Template literals use backtics insted of quotes to define a string
            let name = 'Kisan'
        
    With template literals, it is possible to use both single as well as double quotes inside a string
        let sentance = 'The name "is" Kisan's' //single quote
                       backtic   double quote   




We  can insert variables directly in template literal. This is called string interpolation

            let a = 'This is ${name}' --->Prints'This is a Kisan' //name is a variable


Escape Sequence characters
    If you tyr to print the following string, JavaScript will misunderstand it

    let name = 'Adome D'Angelo'

We can use sibgle quote escape sequence to solve the problem

    let name = 'Adomm D\'Angelo'
    
    similarly we can use \ "inside a string with double quotes
    
    Other escape sequence character are as follows

        \n --->Newline
        \t --->Tab
        \r --->Carriage Return


String properties and Methods

    1. let name = "Kisan"
    name.lenght --->prints 5

    2. let name = "Kisan"
    name.toupperCase() --->prints KISAN

    3. let name = "Kisan"
    name.toLowerCase() --->prints kisan

    4. let name = "Kisan"
    name.slice(2,4) --->prints sa  (from 2 to 4, 4 not included)

    5. let name = "Kisan"
    name.slice(2) --->prints san (from 2 to end)

    6. let name ="Kisan Bhai"
       let newName = name.replace ("Bhai", "Dada")

    7. let name1 = "Kisan"
       let name2 = "Kamalesh"
       let name3 = name1.Concat(name2, "yes")  //We can even use + operator
    
    8. let name = "     KIsan   "
    let newNAme = name.trim() //Removes whitespaces

    String are immutable. Inorder to accress the character at an index we use the following syntax

        let name = "Kisan"
        name [0] --->prints K
        name [1] --->prints i


*/