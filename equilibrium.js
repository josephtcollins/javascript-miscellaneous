const getEquilibrium = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] < arr[i] <arr[i+1]) return arr[i];
  }
}

console.log(getEquilibrium(([1,2,3,1,11])))
console.log(getEquilibrium(([1,3,5,1,17,66])));
