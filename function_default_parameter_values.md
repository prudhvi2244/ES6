# Default Values for Function Parameters
* Now, in ES6 you can specify default values to the function parameters. This means that if no arguments are provided to function when it is called these default parameters values will be used. This is one of the most awaited features in JavaScript. 

# Example-1

        function sayHello(name='World') {
            return `Hello ${name}!`;
        }

        console.log(sayHello()); // Hello World!
        console.log(sayHello('Raj')); // Hello Raj!

# While in ES5, to achieve the same we had to write something like below

# Example-2

        function sayHello(name) {
        var name = name || 'World'; 
        return 'Hello ' +  name + '!';
        }

        console.log(sayHello()); // Hello World!
        console.log(sayHello('Raj')); // Hello Raj!