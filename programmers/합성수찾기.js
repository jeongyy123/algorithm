function solution(n) {
  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    let count = 0;
    for (let j = 1; j < i + 1; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) {
      answer++;
    }

  }
  return answer;
}

const n1 = 10; // 
const n2 = 15;

console.log(solution(n1))
// console.log(solution(n2))