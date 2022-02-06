function solutionUsingMap(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if ((A.length % 2) && (1 <= A.length <= 1000000)) {
    let map = {};
    for (let i = 0; i < A.length; i++) {
      if (A[i] in map && map[A[i]] > 0) {
        map[A[i]] -= 1;
      } else {
        map[A[i]] = 1;
      }
    }

    for (element in map) {
      if (map[element]) {
        return parseInt(element, 10);
      }
    }
  }
  return 0;
}

function solutionUsingXOR(A) {
  if ((A.length % 2) && (1 <= A.length <= 1000000)) {
    oddInt = 0;
    for (let i = 0; i < A.length; i++) {
      oddInt ^= A[i];
    }
    return oddInt;
  }
  return 0;
}