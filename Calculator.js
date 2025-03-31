// Requirement 3 : Support New Line as a Delimiter


function add(numbers) {
    if (!numbers) return 0;

    // Add new line as a delimitter too
    let newAccepetanceRegex = /,|\n/;
    let numArray = numbers.split(newAccepetanceRegex).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("1,2,3,4,5")); // 15
console.log(add("1\n2,3")); // 6
