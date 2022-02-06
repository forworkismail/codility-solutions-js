function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (X <= Y && (1 >= (X && Y && D) <= 1000000000)) {
    const diff = Y - X;
    return Math.ceil(diff / D)
  }
  return 0;
}