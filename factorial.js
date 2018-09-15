// Write a program which can compute the factorial of a given numbers.
// The results should be printed in a comma-separated sequence on a single line.
// Suppose the following input is supplied to the program:
// 8
// Then, the output should be:
// 40320

const getFactorial = num => {
    if (num === 1)
      return 1;
    else {
      return num * getFactorial(num-1)
    }
}

console.log(getFactorial(8));
console.log(getFactorial(2));
console.log(getFactorial(14));
