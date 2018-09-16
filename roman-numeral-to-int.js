
const romanNumeralToInt = str => {
  const romanMap = {
    "i" : 1,
    "v": 5,
    "x": 10,
    "c": 100,
    "m": 1000
  }

  const numArr = str.toLowerCase().split('').map(roman => romanMap[roman]);

  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += (numArr[i+1] > numArr[i]) ? -numArr[i] : numArr[i];
  }
  return total
}


console.log(romanNumeralToInt('V'))
console.log(romanNumeralToInt('VII'))
console.log(romanNumeralToInt('MXCV'))
console.log(romanNumeralToInt('XXXVIII'))
