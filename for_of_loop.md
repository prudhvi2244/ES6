# The for...of Loop
* The new for...of loop allows us to iterate over arrays or other iterable objects very easily.

# Example-1

        // Iterating over array
        let letters = ["a", "b", "c", "d", "e", "f"];

        for(let letter of letters) {
            console.log(letter); // a,b,c,d,e,f
        }

        // Iterating over string
        let greet = "Hello World!";

        for(let character of greet) {
            console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
        }