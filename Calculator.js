// Requirement 6 : Handle Negative Numbers + Ignore Numbers Greater than 1000


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

    // Check the numArray and look for a negative numbers
    let negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    return numArray.filter(el => el <= 1000).reduce((sum, num) => sum + num, 0);
}

// Test cases
function runTests(testCase) {
    try {
        console.log(add("1,2,3,4,5")); // 15
        console.log(add("1\n2,3")); // 6
        console.log(add("//;\n1;2")); // 3
        console.log(add("2,1001")); // 2 (Ignore 1001)

        console.log(add("1,-2,3,-4")); // Exception
    } catch (error) {
        console.log("Exception:", error.message);
    }
}
runTests();
