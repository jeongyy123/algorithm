function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer.push(num_list.slice(i, i + n))
    i += n - 1
  }
  return answer
}

const num_list1 = [1, 2, 3, 4, 5, 6, 7, 8]
const num_list2 = [100, 95, 2, 4, 5, 6, 18, 33, 948]

const n1 = 2;
const n2 = 3;

console.log(solution(num_list1, n1))
console.log(solution(num_list2, n2))

//Others
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}