# The const Keyword

* The new const keyword makes it possible to define constants. Constants are  read-only, you cannot reassign new values to them. They are also block-scoped like let.

# Example-1

        const PI = 3.14;
        console.log(PI); // 3.14

        PI = 10; // error

* However, you can still change object properties or array elements

# Example-2

        // Changing object property value
        const PERSON = {name: "Peter", age: 28};
        console.log(PERSON.age); // 28
        PERSON.age = 30;
        console.log(PERSON.age); // 30

        // Changing array element
        const COLORS = ["red", "green", "blue"];
        console.log(COLORS[0]); // red
        COLORS[0] = "yellow";
        console.log(COLORS[0]); // yellow

