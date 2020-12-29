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

# Note : The for...of loop doesn't work with objects because they are not iterable. If you want to iterate over the properties of an object you can use the for-in loop.