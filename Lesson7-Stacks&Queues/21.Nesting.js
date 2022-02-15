function solution(S) {
  let n = 0;
  let arr = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') n++;
    if (S[i] === ')') n--;
    if (n < 0) return 0;
  }

  return n === 0 ? 1 : 0;

}