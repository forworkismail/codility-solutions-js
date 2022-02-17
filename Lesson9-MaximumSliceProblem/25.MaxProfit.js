function solution(A) {
  if (A.length === 0) return 0;
  let minimum = A[0];
  let maximum = 0;
  let s = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] < minimum) {
      minimum = A[i];
      s = 0;
    } else {
      s += (A[i] - A[i - 1]);
    }
    if (maximum < s) {
      maximum = s;
    }
  }
  return maximum;
}