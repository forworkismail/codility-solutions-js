function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length >= 1 && A.length <= 100000) {
    let sum = 0;
    let passingPairs = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
        sum += 1;
      } else {
        passingPairs += sum;
      }
    }
    return passingPairs <= Math.pow(10, 9) ? passingPairs : -1;
  }
  return 0;
}