function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

const num_list = [12, 4, 15, 46, 38, 1, 14];

console.log(solution(num_list))