const permCheck = (A) => {
  if (1 <= A.length <= 100000) {
    let total = (A.length * (A.length + 1)) / 2;
    let map = {};
    let maximum = 0;
    for (let i = 0; i < A.length; i++) {
      if (!(A[i] in map)) {
        map[A[i]] = A[i];
        total -= A[i];
      };
      maximum = Math.max(maximum, A[i]);
    }

    if (total === 0 && Object.keys(map).length === maximum) return 1;
    else return 0;
  }
  return 0;
}

console.log(permCheck([1, 4, 1]))