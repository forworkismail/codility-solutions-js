function solution(S) {
  if (S.length >= 0 && S.length <= 200000) {
    if (S.length === 0) return 1;
    let map = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
    let arr = [];

    for (let i = 0; i < S.length; i++) {
      if (!(S[i] in map)) {
        if (map[arr[arr.length - 1]] === S[i]) {
          arr.pop();
        } else {
          return 0;
        }
      } else {
        arr.push(S[i]);
      }
    }
    return arr.length === 0 ? 1 : 0;
  }
  return 0;
}

console.log(solution(""))