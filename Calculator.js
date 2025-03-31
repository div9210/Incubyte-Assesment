// Requirement 7 : Support Multi-Character Delimiters i.e allow delimiters of any length using //[delimiter]\n
// +
// Requirement 8: Support Multiple Delimiters i.e allow multiple delimiters using //[delim1][delim2]\n.

function add(numbers) {
    if (!numbers) return 0;

    // Basic delimiters
    let delimiters = [",", "\n"];
    let match = numbers.match(/^\/\/(\[.*?\])\n/); // Accepts the custom delimiters also the ones with multi characters
    if (match) {
        delimiters = match[1]
            .match(/\[(.*?)\]/g)
            .map(d => d.slice(1, -1)); // Removes the first and last square bracket from the delimiters
        numbers = numbers.slice(match[0].length);
    } else {
        // We do not have the multiple character delimiters
        let singleDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (singleDelimiterMatch) {
            delimiters = [singleDelimiterMatch[1]];
            numbers = numbers.slice(singleDelimiterMatch[0].length);
        }
    }

    // Make the delimiter regex by incorporating each type of delimiter found in the multi character delimiter list
    let delimiter = new RegExp(delimiters.map(d => escapeSpecialCharacters(d)).join("|"), "g");

    // The delimiter must have been updated with the new requirement
    let numArray = numbers.split(delimiter).map((el) => Number(el));

    // Check the numArray and look for a negative numbers
    let negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    return numArray.filter(el => el <= 1000).reduce((sum, num) => sum + num, 0);
}

function escapeSpecialCharacters(ex) {
    return ex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Test cases
function runTests() {
    try {
        // Step 1 & 2
        console.log(add("1,2,3,4,5")); // 15 

        // Step 3
        console.log(add("1\n2,3")); // 6

        // Step 4
        console.log(add("//;\n1;2")); // 3

        // Step 6
        console.log(add("2,1001")); // 2 (Ignore 1001)

        // Step 7
        console.log(add("//[***]\n1***2***3")); // 6

        // Step 8
        console.log(add("//[***][%%%]\n1***2%%%3")); // 6

        // Step 5
        console.log(add("1,-2,3,-4")); // Exception
    } catch (error) {
        console.log("Exception:", error.message);
    }
}
runTests();
