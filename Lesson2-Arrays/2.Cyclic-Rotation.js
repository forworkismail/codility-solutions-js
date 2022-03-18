function solution(A, K)
{
    let i = A.length - (K % (A.length || 1));
    return [...A.slice(i), ...A.slice(0, i)];
}