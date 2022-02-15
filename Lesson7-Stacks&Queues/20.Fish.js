function solution(A, B) {
  let ds = [];
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      ds.push(A[i]);
    } else {
      while (ds.length != 0) {
        if (ds[(ds.length - 1)] > A[i]) {
          counter++;
          break;
        } else if (ds[(ds.length - 1)] < A[i]) {
          ds.pop();
          counter++;
        }
      }
    }
  }
  return A.length - counter;
}