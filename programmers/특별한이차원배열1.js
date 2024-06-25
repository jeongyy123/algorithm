function solution(n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      i === j ? temp.push(1) : temp.push(0)
    }
    answer.push(temp)
  }
  return answer
}

const n1 = 3;
const n2 = 6;
const n3 = 1;

console.log(solution(n1))
console.log(solution(n2))
console.log(solution(n3))


//Others
// 1.
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}

// 2.
function solution(n) {
  return Array(n).fill().map((_, i) => Array(n).fill().map(($, j) => i === j ? 1 : 0));
}