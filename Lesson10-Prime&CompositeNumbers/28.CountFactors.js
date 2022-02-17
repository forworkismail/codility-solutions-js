function solution(N) {
  if (N >= 1 && N <= 2147483647) {
    count = 0;

    for (let i = 1; i <= Math.floor(Math.sqrt(N)); i++) {
      if (Number.isInteger(N / i)) {
        count++;
      }
    }

    if (Number.isInteger(Math.sqrt(N))) {
      count = count * 2 - 1;
    } else {
      count *= 2;
    }

    return count;
  }
  return 0;
}

console.log(solution(24));