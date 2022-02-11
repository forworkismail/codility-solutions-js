function solution(S, P, Q) {
  arrayA = new Array(S.length).fill(0);
  arrayC = new Array(S.length).fill(0);
  arrayG = new Array(S.length).fill(0);
  arrayT = new Array(S.length).fill(0);

  sequenceObj = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };

  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'A') { arrayA[i] = 1; }
    if (S[i] === 'C') { arrayC[i] = 1; }
    if (S[i] === 'G') { arrayG[i] = 1; }
    if (S[i] === 'T') { arrayT[i] = 1; }
  }
  arrayA = findCumulativeSum(arrayA);
  arrayC = findCumulativeSum(arrayC);
  arrayG = findCumulativeSum(arrayG);
  arrayT = findCumulativeSum(arrayT);

  output = [];

  for (let i = 0; i < P.length; i++) {
    if (P[i] === Q[i]) {
      output.push(sequenceObj[S[P[i]]])
    }
    else if (arrayA[P[i]] < arrayA[Q[i]] || S[P[i]] === 'A') {
      output.push(1);
    } else if (arrayC[P[i]] < arrayC[Q[i]] || S[P[i]] === 'C') {
      output.push(2);
    } else if (arrayG[P[i]] < arrayG[Q[i]] || S[P[i]] === 'G') {
      output.push(3);
    } else if (arrayT[P[i]] < arrayT[Q[i]] || S[P[i]] === 'T') {
      output.push(4);
    }
  }

  return output;
}

S = 'CAGCCTA'
P = [1, 5, 0]
Q = [4, 5, 6]
console.log(solution(S, P, Q));

function findCumulativeSum(arr) {
  const sum = arr.reduce((accumulator, currentValue) => {
    let { sum, result } = accumulator;
    sum += currentValue;
    result.push(sum);
    return { sum, result }
  }, { sum: 0, result: [] });

  return sum.result
}
