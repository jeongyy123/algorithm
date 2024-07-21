function solution(before, after) {
  const beforeMap = new Map()
  const afterMap = new Map()
  let answer = [];
  for (let i = 0; i < before.length; i++) {
    beforeMap.set(before[i], before.split(before[i]).length - 1)
  }

  for (let i = 0; i < after.length; i++) {
    afterMap.set(after[i], after.split(after[i]).length - 1)
  }

  afterMap.forEach((v, k) => {
    if (v === beforeMap.get(k)) {
      answer.push(1)
    } else {
      answer.push(0)
    }
  })
  return answer.includes(0) ? 0 : 1
}

const before1 = "olleh"
const before2 = "allpe"
const before3 = "abab"
const before4 = "hello"

const after1 = "hello"
const after2 = "apple"
const after3 = "aaac"
const after4 = "hleol"

console.log(solution(before1, after1))
console.log(solution(before2, after2))
console.log(solution(before3, after3)) // 0
console.log(solution(before4, after4)) // 1

//Others
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}
