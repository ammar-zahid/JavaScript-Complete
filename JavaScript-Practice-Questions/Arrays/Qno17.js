// Ignore Some Values: Write a function that takes an array of numbers as input and returns their sum. However, ignore the first and last numbers in the array. Use array destructuring to achieve this.

function sumIgnoringFirstAndLast(numbers) {
    let sum = 0;
  
    for (let i = 1; i < numbers.length - 1; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const result = sumIgnoringFirstAndLast(numbers);
  console.log(result); // Output: 9 (2 + 3 + 4)
  