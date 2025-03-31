// Requirement 2 : Handle Unknown Amount of Numbers

// Note : The same function is fully capable to handle multiple comma seperated args

function add(numbers) {
    if (!numbers) return 0;

    let numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(add("1,2,3,4,5")); // 15
