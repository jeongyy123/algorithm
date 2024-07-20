function solution(my_string) {
  return Array.from(new Set(my_string)).join('')
}

const my_string1 = "people"
const my_string2 = "We are the world"

console.log(solution(my_string1))
console.log(solution(my_string2))