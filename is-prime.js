

const isPrime = num => {
    for (let i = 2; i < num/2; i++) {
      if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(1081));
console.log(isPrime(1080));
