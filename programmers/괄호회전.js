function solution(s) {
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    temp = s.slice(i + 1, s.length + 1) + s.slice(0, i + 1)

  }
  // 1. 회전하기
  // 2. 올바른 괄호인지 확인

}


const s1 = "[](){}"
const s2 = "}]()[{"
const s3 = "[)(]"
const s4 = "}}}"

console.log(solution(s1))
// console.log(solution(s2))
// console.log(solution(s3))
// console.log(solution(s4))