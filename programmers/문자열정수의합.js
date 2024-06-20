function solution(num_str) {
  return num_str.split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)
}

const num_str1 = "123456789";
const num_str2 = "1000000";

console.log(solution(num_str1));
console.log(solution(num_str2));

//Others

function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0)
}
