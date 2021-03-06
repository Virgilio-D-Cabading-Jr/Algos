//////////////////////////////////////////////////
// 220610 Single Number Algorithm algo.js
//////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = (nums) => {
    // Pseudo Code
    // Create an empty hash map
    // Iterate through the nums array
    // For each number in nums array
    //      Add that number and count to the hash map
    // Iterate through the hash map and return any number
    //      that occured an odd number of times

    // Create an empty hash map
    let foundNums = new Map();
    let output = null;

    // Iterate through the nums array
    for (let num of nums) {
        // For each number in nums array
        //      Add that number and count to the hash map
        if (!foundNums.has(num)) {
            foundNums.set(num, 1);
        } else {
            const count = foundNums.get(num);
            foundNums.set(num, count+1);
        }
    }

    // Iterate through the hash map and return any number
    //      that occured an odd number of times
    foundNums.forEach((val,key) => {
        if (val % 2 != 0) {
            output = key;
        }
    });

    return output;
};

console.log("***********************************");
console.log("Single Number Algorithm\n");

console.log("singleNumber([2,2,1]):", singleNumber([2,2,1]));
console.log("singleNumber([4, 1, 2, 1, 2]):", singleNumber([4, 1, 2, 1, 2]));