# Template Literals

* Template literals provide an easy and clean way create multi-line strings and perform string interpolation. Now we can embed variables or expressions into a string at any spot without any hassle.

* Template literals are created using back-tick (` `) (grave accent) character instead of the usual double or single quotes. Variables or expressions can be placed inside the string using the ${...} syntax.

# Example-1 [ES6]

        // Simple multi-line string
        let str = `The quick brown fox
            jumps over the lazy dog.`;

        // String with embedded variables and expression
        let a = 10;
        let b = 20;
        let result = `The sum of ${a} and ${b} is ${a+b}.`;
        console.log(result); // The sum of 10 and 20 is 30.

* While in ES5, to achieve the same we had to write something like below

# Example-1 [ES5]

        // Multi-line string
        var str = 'The quick brown fox\n\t'
            + 'jumps over the lazy dog.';

        // Creating string using variables and expression
        var a = 10;
        var b = 20;
        var result = 'The sum of ' + a + ' and ' + b + ' is ' + (a+b) + '.';
        console.log(result); // The sum of 10 and 20 is 30.

