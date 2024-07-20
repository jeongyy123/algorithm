function solution(my_string, s, e) {
  const arr = my_string.split('')
  const reversedArr = arr.slice(s, e + 1).reverse();

  arr.splice(s, reversedArr.length, ...reversedArr)

  return arr.join('')
}

const my_string = "Progra21Sremm3"
const s = 6
const e = 12

console.log(solution(my_string, s, e))

