function solution(A) {
  let value = (A.length + 1) * (A.length + 2) / 2;
  for (let i = 0; i < A.length; i++) {
    value -= A[i];
  }
  return value;
}