# Trainer : Raj Prudhvi(Oracle Certified)
# Arrow Functions
* Arrow Functions are another interesting feature in ES6. It provides a more concise syntax for writing function expressions by opting out the function and return keywords.

* Arrow functions are defined using a new syntax, the fat arrow (=>) notation.

# Example-1

        // Function Expression
        var sum = function(a, b) {
            return a + b;
        }
        console.log(sum(2, 3)); // 5

        // Arrow function
        var sum = (a, b) => a + b;
        console.log(sum(2, 3)); // 5

* As you can see there is no function and return keyword in arrow function declaration.

* You can also skip the parentheses i.e. () in case when there is exactly one parameter, but you will always need to use it when you have zero or more than one parameter.

* Additionally, if there's more than one expression in the function body, you need to wrap it braces ({}). In this case you also need to use the return statement to return a value.