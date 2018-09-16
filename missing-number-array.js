const findMissingNumber = arr => {
  const diff1 = arr[1] - arr[0];
  const diff2 = arr[2] - arr[1];
  const diff3 = arr[3] - arr[2];

  let diff;
  if (diff1 === diff2) diff = diff1;
  if (diff2 === diff3) diff = diff2;
  if (diff1 === diff3) diff = diff3;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i-1] !== diff) return (arr[i-1] + diff);
  }
}

console.log(findMissingNumber([1,2,3,4,6,7,8]));
console.log(findMissingNumber([4,8,12,20,24]));
