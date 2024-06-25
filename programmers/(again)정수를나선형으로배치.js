function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        answer[0][j] = j + 1;
      } else if (j === n - 1) {
        answer[i][n - 1] = answer[0][n - 1] + 1 + i;
      } else if (i === n - 1) {
        answer[n - 1][j] === answer[0][n - 1] + 1 + i;
      }
    }
    console.log(answer)
  }
}

const n1 = 4;
const n2 = 5;

console.log(solution(n1))
console.log(solution(n2))
