console.log(solution([10, 10, -1, 2, 4, -1, 2, -1]))
function solution(A) {
  let lowestOf2 = Number.MAX_VALUE;
  let lowestOf2position = 0;
  let loopLengthOf2 = Number.isInteger(A.length / 2) ? ((A.length / 2) + 1) : Math.ceil(A.length / 2);

  let lowestOf3 = Number.MAX_VALUE;
  let loopLengthOf3 = (A.length / 3) > 1 ? Math.ceil(A.length / 3) : 0;
  let lowestOf3position = loopLengthOf3 ? 0 : Number.MAX_VALUE;

  for (let i = 0; i <= loopLengthOf2; i++) {
    avg = (A[i] + A[i + 1]) / 2;
    if (avg < lowestOf2) {
      lowestOf2 = avg;
      lowestOf2position = i;
    }
  }

  if (loopLengthOf3) {
    for (let i = 0; i <= loopLengthOf3; i++) {
      avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
      if (avg < lowestOf3) {
        lowestOf3 = avg;
        lowestOf3position = i;
      }
    }
  }


  return lowestOf2 < lowestOf3 ? lowestOf2position : lowestOf3position;
}
