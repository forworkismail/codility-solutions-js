function solution(N) {
  let minimum = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= Math.floor(Math.sqrt(N)); i++) {
    if (Number.isInteger(N / i)) {
      minimum = Math.min(minimum, (N / i) + i);
    }
  }

  return minimum * 2;
}