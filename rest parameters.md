# The Rest Parameters
* ES6 introduces rest parameters that allow us to pass an arbitrary number of parameters to a function in the form of an array. 
* This is particularly helpful in situations when you want to pass parameters to a function but you have no idea how many you will need.

* A rest parameter is specified by prefixing a named parameter with rest operator
 (...) i.e. three dots.
 * Rest parameter can only be the last one in the list of parameters, and there can only be one rest parameter.

 # Example-1

        function sortNames(...names) {
            return names.sort();
        }

        alert(sortNames("Sarah", "Harry", "Peter")); // Harry,Peter,Sarah
        alert(sortNames("Tony", "Ben", "Rick", "Jos")); // John,Jos,Rick,Tony

* When the rest parameter is the only parameter in a function, it gets all the arguments passed to the function, otherwise it gets the rest of the arguments that exceeds the number of named parameters.

# Example-2

        function myFunction(a, b, ...args) {
            return args;
        }

        alert(myFunction(1, 2, 3, 4, 5)); // 3,4,5
        alert(myFunction(-7, 5, 0, -2, 4.5, 1, 3)); // 0,-2,4.5,1,3


# Note : Note: Don't confuse the term rest parameters with the REST (REpresentational State Transfer). This has nothing to do with RESTful web services.