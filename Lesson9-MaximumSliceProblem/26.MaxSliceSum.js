function solution(A) {
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < A.length; i++) {
    sum = Math.max(sum + A[i], A[i]);
    max = Math.max(max, sum);
  }

  return max;
}

console.log(solution([3, 2, -1]));