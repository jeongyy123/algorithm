function solution(num_list) {
  let answer = 0;

  for (const num of num_list) {
    if (num < 0) {
      answer = num_list.indexOf(num);
      break;
    } answer = -1
  }
  return answer;
}

const num_list1 = [12, 4, 15, 46, 38, -2, 15]
const num_list2 = [13, 22, 53, 24, 15, 6]

console.log(solution(num_list1))
console.log(solution(num_list2))