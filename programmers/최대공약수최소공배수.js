function solution(n, m) {
  let gcd = 1;
  for (let i = 2; i < Math.min(n, m) + 1; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  let lcm = (n * m) / gcd

  return [gcd, lcm]
}

const n1 = 3
const n2 = 2

const m1 = 12
const m2 = 5

console.log(solution(n1, m1))
console.log(solution(n2, m2))