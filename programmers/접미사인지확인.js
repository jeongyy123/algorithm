function solution(my_string, is_suffix) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(-i))
  }
  if (answer.includes(is_suffix)) {
    return 1;
  }
  return 0;
}

const my_string = "banana"
const is_suffix = "ana"
console.log(solution(my_string, is_suffix))