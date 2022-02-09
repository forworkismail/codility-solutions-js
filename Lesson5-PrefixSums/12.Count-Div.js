function solution(A, B, K) {
  const maxConstraint = Math.pow(10, 9) * 2;
  if (A >= 0 && A <= maxConstraint && B >= 0 && B <= maxConstraint) {
    output = parseInt((B / K), 10) - parseInt((A / K), 10);
    A % K === 0 ? output++ : output;
    return output;
  }
  return 0;
}