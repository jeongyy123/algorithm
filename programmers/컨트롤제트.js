function solution(s) {
  let answer = 0;
  let arr = s.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 'Z' ? answer -= Number(arr[i - 1]) : answer += Number(arr[i])
  }
  return answer;
}

const s1 = "1 2 Z 3"
const s2 = "10 20 30 40"
const s3 = "10 Z 20 Z 1"
const s4 = "10 Z 20 Z"
const s5 = "-1 -2 -3 Z"

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))
console.log(solution(s4))
console.log(solution(s5))


//Others
// 스택처럼 빼면 되는 걸!
function solution(s) {
  const stack = []

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target)
  })

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}