function solution(date1, date2) {
  const newDate1 = new Date(date1)
  const newDate2 = new Date(date2)

  return newDate1 >= newDate2 ? 0 : 1
}

const date11 = [2021, 12, 28]
const date12 = [1024, 10, 24]

const date21 = [2021, 12, 29]
const date22 = [1024, 10, 24]

console.log(solution(date11, date21))
console.log(solution(date12, date22))