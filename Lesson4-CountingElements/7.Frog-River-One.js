const frogRiverOne = (X, A) => {
  if (1 <= X <= 100000) {
    let map = {};
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (!(A[i] in map)) {
        map[A[i]] = A[i];
        count++;
      }
      if (count === X) {
        return i;
      }
    }
  }
  return -1;
}