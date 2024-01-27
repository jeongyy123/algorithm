function solution(start, end) {
  let answer = [];
  for (let i = start; i >= end; i--) {
    answer.push(i)
  }
  return answer;
}

const start = 10
const end = 3
console.log(solution(start, end))