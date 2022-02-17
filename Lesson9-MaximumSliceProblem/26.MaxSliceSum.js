function solution(A) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    sum = Math.max(sum + A[i], A[i]);
    max = Math.max(max, sum);
  }

  return max;
}