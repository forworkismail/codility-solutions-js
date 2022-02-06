const tape = (A) => {
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  let leftSlidingWindow = 0;
  let result = 1000000;

  for (let j = 0; j < A.length - 1; j++) {
    sum -= A[j];
    leftSlidingWindow += A[j];
    difference = Math.abs(leftSlidingWindow - sum);
    result = Math.min(difference, result);
  }
  return result;
}