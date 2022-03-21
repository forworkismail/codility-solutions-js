const findSmallestPositiveInteger = (A) => {
  if (A.length >= 1 && A.length <= 100000) {
    const sortedArray = A.sort((a, b) => a - b);
    let output = 1;

    for (let i = 0; i < sortedArray.length; i++) {
      if (A[i] === output) {
        output++;
      }
    }
    return output;
  }
  return 0;
}