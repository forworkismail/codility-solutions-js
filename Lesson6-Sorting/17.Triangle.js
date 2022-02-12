let arr = [1, 4, 11, 3]
const triangle = (A) => {
  if (A.length >= 0 && A.length <= 100000) {
    let sortedArray = A.sort((a, b) => (a - b))
    for (let i = 0; i < A.length; i++) {
      if (A[i] > A[i + 2] - A[i + 1]) {
        return 1;
      }
    }
    return 0;
  }
  return 0;
}

console.log(triangle(arr))