// Write a function that rearranges an integer into its largest possible value.

// Example (Input --> Output)

// 123456 --> 654321
// 105 --> 510
// 12 --> 21

// Solution

function superSize(num){
    return parseInt(num.toString().split('').sort((a, b) => b-a ).join(''));
  }