function solution(A) {
  let sortedArray = [...A].sort((a, b) => (a - b));
  let half = Math.floor(A.length / 2);
  let candidate = sortedArray[half];
  let count = 0;
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      result = i;
      count++;
    }
    if (count > half) {
      return result;
    }
  }
  return -1;

}

console.log(solution([3, 4, 1, 1, 3, 1, 1, 2, 1, 1, 1]))