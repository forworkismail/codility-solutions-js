function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length >= 3 && A.length <= 100000) {
    let maxProductOfThree = 0;
    const sortedArray = A.sort((a, b) => (a - b));
    const leftSideMax = sortedArray[0] * sortedArray[1] * sortedArray[sortedArray.length - 1];
    const rightSideMax = sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 3];
    maxProductOfThree = Math.max(leftSideMax, rightSideMax);
    return maxProductOfThree;
  }
  return 0;
}