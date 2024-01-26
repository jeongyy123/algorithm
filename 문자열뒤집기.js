function solution(my_string, s, e) {
  const my_stringArr = my_string.split(my_string.slice(s, e + 1))
  const slicedStr = my_string.slice(s, e + 1)
  const reveredArr = slicedStr.split("").reverse()
  console.log(reveredArr)
  const reveredStr = reveredArr.join("")
  const answer = my_stringArr.splice(s, 0, reveredStr)
  return answer.join("")
}

const my_string = "Progra21Sremm3"
const s = 6
const e = 12

console.log(solution(my_string, s, e))

