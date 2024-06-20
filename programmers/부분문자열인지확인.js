function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0
}

const my_string1 = "banana";
const my_string2 = "banana";

const target1 = "ana";
const target2 = "wxyz";

console.log(solution(my_string1, target1))