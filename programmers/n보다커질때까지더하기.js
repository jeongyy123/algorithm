function solution(numbers, n) {
  let answer = 0;
  for (const number of numbers) {
    if (answer <= n) {
      answer += number
    } else if (answer > n) {
      return answer
    }
  }
  return answer
}

const numbers = [58, 44, 27, 10, 100];
const n = 139
console.log(solution(numbers, n))
