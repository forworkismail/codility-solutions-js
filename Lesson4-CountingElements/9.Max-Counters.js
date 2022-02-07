const maxCounter = (N, A) => {
  if (N >= 1 && N <= 100000) {
    let result = new Array(N).fill(0);
    let maxCounter = 0;
    let b = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] >= 1 && A[i] <= N + 1) {
        if (A[i] <= N) {
          result[A[i] - 1] = Math.max(b, (result[A[i] - 1])) + 1;
          maxCounter = Math.max(maxCounter, result[A[i] - 1]);
        } else {
          b = maxCounter;
        }
      }
    }

    for (let j = 0; j < result.length; j++) {
      if (result[j] < b) {
        result[j] = b;
      }
    }
    return result;
  }
  return 0;
}