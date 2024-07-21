function solution(n) {
  let answer = new Set();
  for (let i = 2; i < n + 1; i++) {
    if (n % i === 0) {
      n = n / i
      answer.add(i)
    }
  }
  return Array.from(answer).sort()
}

const n1 = 12;
const n2 = 17
const n3 = 420
const n4 = 18

console.log(solution(n1))
console.log(solution(n2))
console.log(solution(n3))
console.log(solution(n4)) //[2,3]