function solution(my_string) {
  return my_string.split(/[^0-9]/g).reduce((a, c) => a + Number(c), 0)
}

const my_string1 = "aAb1B2cC34oOp"
const my_string2 = "1a2b3c4d123Z"

console.log(solution(my_string1))
console.log(solution(my_string2))


//Others
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}