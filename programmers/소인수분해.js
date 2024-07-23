function solution(n) {
  let answer = new Set();
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      n = n / i
      answer.add(i)
    } else {
      i++;
    }
  }

  return Array.from(answer).sort((a, b) => a - b)
}

const n1 = 12;
const n2 = 17
const n3 = 420
const n4 = 18
const n5 = 252

// console.log(solution(n1))
// console.log(solution(n2))
// console.log(solution(n3))
// console.log(solution(n4)) //[2,3]
console.log(solution(n5))