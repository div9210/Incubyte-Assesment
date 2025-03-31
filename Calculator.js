// Requirement 1 : Handle Empty String and Basic Input (0, 1, or 2 numbers)

function add(numbers) {
    if (!numbers) return 0;

    let numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add(""));     // 0
console.log(add("1"));    // 1
console.log(add("1,2"));  // 3
