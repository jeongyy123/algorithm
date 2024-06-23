function solution(num_list, n) {
  let answer = num_list.splice(n)
  answer.push(...num_list)
  return answer;
}


const num_list = [2, 1, 6]
const n = 1
console.log(solution(num_list, n))

