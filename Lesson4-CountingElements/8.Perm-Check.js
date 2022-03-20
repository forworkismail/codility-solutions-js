const permCheck = (A) => {
  let n = A.length;
  if (1 <= n <= 100000) {
  let total = (n * (n + 1)) / 2;
  let map = {};
  for (let i = 0; i < n; i++) {
      
    if (A[i] > n) {
        return 0;
    }

    if (!(A[i] in map)) {
      map[A[i]] = A[i];
      total -= A[i];
    };
  }

  return total === 0 ? 1 : 0;
}
  return 0;
}

console.log(permCheck([1, 4, 1]))