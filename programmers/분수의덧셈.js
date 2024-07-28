function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// 최소공배수(LCM) 구하기
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
  const lcmDenom = lcm(denom1, denom2);

  // 분수를 같은 분모로 변환 후 더하기
  const numer = (numer1 * (lcmDenom / denom1)) + (numer2 * (lcmDenom / denom2)); // 분자
  const denom = lcmDenom; // 분모

  // 결과 분수의 기약 분수 구하기
  const gcdNumerDenom = gcd(numer, denom);
  const reducedNumer = numer / gcdNumerDenom;
  const reducedDenom = denom / gcdNumerDenom;

  return [reducedNumer, reducedDenom];//기약분수로 나타내기위해 답 분자분모에 최대공약수로 나눔.
}

// const numer1 = 9
// const numer2 = 1
// const denom1 = 2
// const denom2 = 3

const numer1 = 1
const numer2 = 3
const denom1 = 2
const denom2 = 4

console.log(solution(numer1, denom1, numer2, denom2))