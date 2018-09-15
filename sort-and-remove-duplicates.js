// Write a program that accepts a sequence of whitespace separated words as input and prints the words after removing all duplicate words and sorting them alphanumerically.
// Suppose the following input is supplied to the program:
// hello world and practice makes perfect and hello world again
// Then, the output should be:
// again and hello makes perfect practice world


const sortAndRemoveDuplicates = str => {
  const strArray = str.split(' ');
  let arr = [];
  let map = {};

  strArray.forEach((word) => {
    if (!map[word]) {
      arr.push(word);
    }
    map[word] = true;
  });

  return arr.sort().join(' ')
}

console.log(sortAndRemoveDuplicates('hello world and practice makes perfect and hello world again'));
