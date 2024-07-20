function solution(age) {
  const ageChart = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
  }
  return age.toString().split('').map(val => ageChart[val]).join('')
}

const age = 23

console.log(solution(age))

//Others
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}