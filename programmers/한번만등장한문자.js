function solution(s) {
  let answer = []
  for (let i = 0; i < s.length; i++) {
    let splitedArr = s.split(s[i])
    if (splitedArr.length === 2) {
      answer.push(s[i])
    }
  }
  return answer.sort().join('')
}

const s1 = "abcabcadc"
const s2 = "abdc"
const s3 = "hello"

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))


//Others
// 앞에서 부터의 인덱스와 뒤에서부터의 인덱스가 같으면 -> 1개밖에 없음을 활용
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}
