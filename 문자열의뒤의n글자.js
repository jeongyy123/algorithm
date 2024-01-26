function solution(my_string, n) {
  let answer = '';
  answer = my_string.slice(-n)
  return answer;
}

const my_string = "ProgrammerS123"

const n = 11

console.log(solution(my_string, n))