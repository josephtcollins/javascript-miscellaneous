// can number be expressed as sum of two cubes


const sumOfTwoCubes = num => {
    for (let i = 1; i < num/2; i++) {
      for (let j = 1; j < num/2; j++) {
        if ((i*i*i + j*j*j) === num) return true;
      }
    }
    return false;
}

console.log(sumOfTwoCubes(16)); // true
console.log(sumOfTwoCubes(133)); // true
console.log(sumOfTwoCubes(120000)); // false
