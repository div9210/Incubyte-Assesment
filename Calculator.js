// Requirement 4 : Support Custom Delimiters following the format //[delimiter]\n[numbers...]


function add(numbers) {
    if (!numbers) return 0;

    // Add new line as a delimitter too
    let delimiter = /,|\n/;
    let match = numbers.match(/^\/\/(.+)\n/); // Check if the input string has the extra custom delimiters
    if (match) {
        delimiter = new RegExp(match[1]);  // Create a new regex using the custom delimiter
        numbers = numbers.slice(match[0].length);  // Remove the "//;\n" part from numbers (if it carries that)
    }

    // The delimiter must have been updated with the new requirement
    let numArray = numbers.split(delimiter).map((el) => Number(el));
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("1,2,3,4,5")); // 15
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2"));
