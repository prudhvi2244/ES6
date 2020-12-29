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