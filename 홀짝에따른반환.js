function solution(n) {
  let answer = 0;
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i) {
      answer += i
      i = i + 2
    }
  } else {
    for (let i = 2; i <= n; i) {
      answer += i * i
      i = i + 2
    }
  }
  return answer;
}

const n = 7;
const n2 = 10;

// solution(n)
solution(n2)