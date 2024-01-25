function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i)
  }
  return answer;
}

const start_num = 3;
const end_num = 10;
console.log(solution(start_num, end_num))