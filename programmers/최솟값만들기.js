function solution(a, b) {
  let answer = 0;
  a.sort((a, b) => a - b)
  b.sort((a, b) => b - a)
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i]
  }
  return answer;
}

const a1 = [1, 4, 2]
const a2 = [1, 2]

const b1 = [5, 4, 4]
const b2 = [3, 4]

console.log(solution(a1, b1))
console.log(solution(a2, b2))