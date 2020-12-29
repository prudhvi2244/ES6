# The let Keyword
* ES6 introduces the new let keyword for declaring variables. Prior to ES6, the only way to declare a variable in JavaScript was the var keyword. Let's see what's the difference between them is.

* There are two critical differences between the var and let. Variables declared with the var keyword are function-scoped and hoisted at the top within its scope, whereas variables declared with let keyword are block-scoped ({}) and they are not hoisted.

* Block scoping simply means that a new scope is created between a pair of curly brackets i.e. {}. Therefore, if you declare a variable with the let keyword inside a loop, it does not exist outside of the loop

# Example-1

        // ES6 syntax
        for(let i = 0; i < 5; i++) {
            console.log(i); // 0,1,2,3,4
        }
        console.log(i); // undefined


        // ES5 syntax
        for(var i = 0; i < 5; i++) {
            console.log(i); // 0,1,2,3,4
        }
        console.log(i); // 5