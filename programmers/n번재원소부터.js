function solution(num_list, n) {
  let answer = num_list.slice(n - 1)
  return answer;
}

const num_list = [2, 1, 6]
const n = 3

console.log(solution(num_list, n))