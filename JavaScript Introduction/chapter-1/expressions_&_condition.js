/*
Expressions & Conditionals
    A fragment of code that produces a value is called an expression. Every value written literally is an expression for
        ex : 66 or "Kisan"

Operators in JavaScript

1. Arithmetic operators

    +       Addition
    -       Subtraction
    *       Multiplication
    **      Exponentiation
    /       Division
    %       Modulus
    ++      Increment
    --      Decrement

2. Assignment operators

    =       x = y
    +=      x = x+y
    -=      x = x-y
    *=      x = x*y
    And so on...


3. Comparision operators
 
    ==          equal to 
    !=          not equal
    ===         equal value and type
    !==         not equal value or not equal type
    >           greater than
    <           Less than
    >=          greater than or equal to 
    <=          less than or equal to 
    ?           ternary operator


4. Logical operators

    &&          logical and
    ||          logical or
    !           logical not

    Apart from these, we also have type and bitwise operator Bitwise oprator perform bit by bit operations
    on numbers

                6+9 = 15 -->Result (+ is operator and 6 , 9 is operand)

Comments in JavaScript 

As we known previous 



Conditional Statements
    Sometimes we might have to execute a block of code based off some condition.
    For example a prompt might ask for the age of the user and if its greater than 18 
    display a special message.

    In Javascript we have three forms of if...else statement.

    1. if statement 
    2. if...else statement
    3. if...else if..else statement


    If Statement 
        The if statement in JavaScript looks like this : 
        if(condition) {
            //Execute this code
        }

    The if statement evaluates the condition inside the () If the condition is evaluated to true, the code inside the body of if is executed else the code si not executed.

    if-else statemnt
        The if statement can have an optional else clause.
        The syntax looks something like this :

        if(condition){
            //block of code if condition true
        }else{
            //block of co de if the code is false
        }

    If the condition is true, code inside if is executed else code inside else block
    is executed

    if - else if statement
        Sometimes we might want to keep rechecking a set of condition one by one until one 
        matches. We use if else if fo rachieving this

            Syntax of  if..else if looks like this

            if(age > 0){
                console.log("A valid age");
            }else if(age > 10 && age < 15) {
                console.log(Not a kid);
            }else{
                console.log("Invalid Age");
            }


    JavaScript ternary operator
        Evaluates a condition and executes a block of code based on the condition
            
            Condition ? exp 1 : exp 2
        
        Example syntax of ternary operator looks like this : 
         
        (marks > 10) ? 'yes' : 'no' 
                                //If marks are grater than 10, you are passed else not


                                


*/