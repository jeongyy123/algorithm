function solution(my_string) {
  return my_string.split('').map((val) => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
  ).join('');
}



const my_string1 = "cccCCC"
const my_string2 = "abCdEfghIJ"

console.log(solution(my_string1))
console.log(solution(my_string2))
