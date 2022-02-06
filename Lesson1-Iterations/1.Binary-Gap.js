function solution(N) {
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    let foundOne = false;

    let divisionResult = N;
    let maxGap = 0;
    let zeroCount = 0;

    while (divisionResult != 0) {
      if (divisionResult % 2) {
        foundOne = true;
        zeroCount = 0;
      } else if (foundOne) {
        zeroCount++;
        if (zeroCount > maxGap) {
          maxGap = zeroCount;
        }
      }
      divisionResult = Math.floor(divisionResult / 2);
    }
    return maxGap;
  }
  return 0;
}