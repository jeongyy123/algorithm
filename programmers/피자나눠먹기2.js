function solution(n) {
  let answer = 0;
  // while : n이 나눠떨어지면 break;
  for (let i = 1; i <= n; i++) {
    if ((i * 6) % n === 0) {
      return i
    }
  }
  return answer;
}

const n1 = 6;
const n2 = 10;
const n3 = 4;

console.log(solution(n1))
console.log(solution(n2))
console.log(solution(n3))
