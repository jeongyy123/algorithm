// 올바지않은 괄호
// 조건 1. ()를 없애고 없애고 남은 애들이 있으면 false - 반복문
// 조건 2. 홀수
// 조건 3. 시작이 ')' 인 경우

// 테스트 케이스는 통과됐으나 타임아웃뜸ㅠ
// function solution(s) {
//   while (s.length > 0) {
//     s = s.replaceAll('()', '');
//     if (s[0] === ')' || s[s.length - 1] === '(') return false
//   }

//   return true;
// }

// 스택을 이용한 방법 - 스택에 넣고 빼고 -> 길이로 불린값 확인
function solution(s) {
  let stack = [];

  for (let char of s) {
    if (char === '(') {
      stack.push(char)
    } else {
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }

  return stack.length === 0
}

const s1 = "()()"
const s2 = "(())()"
const s3 = ")()("
const s4 = "(()("
const s5 = "())((()))(()"


console.log(solution(s1)) //true
console.log(solution(s2)) //true
console.log(solution(s3)) //false
console.log(solution(s4)) //false
console.log(solution(s5)) //false
