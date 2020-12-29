# Modules

* Prior to ES6, there were no native support for modules in JavaScript. Everything inside a JavaScript application, for example variables across different JavaScript files, shared the same scope.

* ES6 introduces file based module, in which each module is represented by a separate .js file. Now, you can use the export or import statement in a module to export or import variables, functions, classes or any other entity to/from other modules or files.

# main.js
     
        let greet = "Hello World!"
        const PI = 3.14;

        function multiplyNumbers(a, b) {
            return a * b
        }

        // Exporting variables and functions
        export { greet, PI, multiplyNumbers }

# app.js
  
        import { greet, PI, multiplyNumbers } from './main.js';

        alert(greet); // Hello World!
        alert(PI); // 3.14
        alert(multiplyNumbers(6, 15)); // 90

# index.html

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>ES6 Module Demo</title>
        </head>
        <body>
            <script type="module" src="app.js"></script>
        </body>
        </html>

