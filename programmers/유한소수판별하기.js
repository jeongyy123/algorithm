function solution(a, b) {
  let gcd = 1;

  for (let i = 1; i < Math.min(a, b) + 1; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  b /= gcd;

  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5
  }

  return b === 1 ? 1 : 2;
}


const a1 = 7
const a2 = 11
const a3 = 12

const b1 = 20
const b2 = 22
const b3 = 21

console.log(solution(a1, b1))
console.log(solution(a2, b2))
console.log(solution(a3, b3))