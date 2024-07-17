function solution(n) {
  // 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
  // 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
  // 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.

  // console.log(parseInt('1010011', 2))
  let a = 83
  // console.log(a.toString(2))
  // console.log(a % 2) // 1
  let b = n.toString(2).split('')

  for (let i = b.length; i >= 0; i--) {
    if (b[i] === '1') {
      console.log(`${i}인덱스 ${typeof b[i]}`)
      continue;
    } else {
      b[i] = '1'
      console.log(`${i}인덱스 ${b[i]}`)
      break;
    }
  }
  return b.join('')
}

const n1 = 78 // 1001110
// 1010011
// 1011110 (|)
// 1000010 (&)
// 0011101 (^)
const n2 = 15 // 1111
//10111 
//11111 (|)
//00111 (&) 
//11000 (^)

console.log(solution(n1))
// console.log(solution(n2))