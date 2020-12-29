# Destructuring Assignment
* The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables by providing a shorter syntax.

* There are two kinds of destructuring assignment expressions—the array and object destructuring assignment.

# The array destructuring assignment
* Prior to ES6, to get an individual value of an array we need to write something like below

# Example-1

        // ES5 syntax
        var fruits = ["Apple", "Banana"];

        var a = fruits[0];
        var b = fruits[1];
        alert(a); // Apple
        alert(b); // Banana

* In ES6, we can do the same thing in just one line using the array destructuring assignment

# Example-2

        // ES6 syntax
        let fruits = ["Apple", "Banana"];

        let [a, b] = fruits; // Array destructuring assignment

        alert(a); // Apple
        alert(b); // Banana

* You can also use rest operator in the array destructuring assignment

# Example-3

        // ES6 syntax
        let fruits = ["Apple", "Banana", "Mango"];

        let [a, ...r] = fruits;

        alert(a); // Apple
        alert(r); // Banana,Mango
        alert(Array.isArray(r)); // true

* Unwanted elements of the array can also be thrown away via an extra comma

# Example-4

        let employee=['Raj','Prudhvi','Male']

        let [,,gender]=employee

        console.log('Employee Gender :',gender)

# Default values

* If there are fewer values in the array than variables in the assignment, there will be no error. Absent values are considered undefined
* If we want a “default” value to replace the missing one, we can provide it using =

# Example-5

        let employee=['Raj','Prudhvi']

        let [fname,lname,gender='Male']=employee

        console.log('Employee First Name :',fname)
        console.log('Employee Last Name :',lname)
        console.log('Employee Gender :',gender)


# The object destructuring assignment

* In ES5 to extract the property values of an object we need to write something like below

# Example-6

        // ES5 syntax
        var person = {name: "Raj", age: 28};

        var name = person.name;
        var age = person.age;

        alert(name); // Raj
        alert(age); // 28

* But in ES6, you can extract object's property values and assign them to the variables easily like below

# Example-7

        // ES6 syntax
        let person = {name: "Raj", age: 28};

        let {name, age} = person; // Object destructuring assignment

        alert(name); // Raj
        alert(age); // 28



    