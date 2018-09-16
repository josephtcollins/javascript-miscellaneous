

const greatestCommonDivisor = (a, b) => {
  const lesser = (a < b) ? a : b;
  for (let i = lesser; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}

console.log(greatestCommonDivisor(14, 21));
console.log(greatestCommonDivisor(69, 169));
console.log(greatestCommonDivisor(69, 171));
