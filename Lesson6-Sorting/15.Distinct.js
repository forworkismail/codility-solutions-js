function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length >= 0 && A.length <= 100000) {
    let map = {};
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      if (!(A[i] in map)) {
        count++;
        map[A[i]] = A[i];
      }
    }

    return count;
  }
  return 0;
}
