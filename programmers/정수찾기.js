function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0
}

const num_list1 = [1, 2, 3, 4, 5];
const num_list2 = [15, 98, 23, 2, 15];

const n1 = 3;
const n2 = 20;

console.log(solution(num_list1, n1))
