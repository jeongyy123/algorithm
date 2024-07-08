function solution(my_string, num1, num2) {
  my_string = my_string.split('')
  let temp = my_string[num1]
  my_string[num1] = my_string[num2]
  my_string[num2] = temp

  return my_string.join('');
}


const my_string1 = "hello"
const my_string2 = "I love you"

const num11 = 1
const num12 = 2

const num21 = 3
const num22 = 6

console.log(solution(my_string1, num11, num21))
console.log(solution(my_string2, num21, num22))

// Others
// 구조분해 할당
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}