function solution(A, K) {
  if (A.length === 0) return [];
  if (0 <= (A.length || K.length) <= 1000) {
    for (let i = 0; i < K; i++) A = shiftArray(A);
    return A;
  }
  return [];
}

function shiftArray(arr) {
  let lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
};