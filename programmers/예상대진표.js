function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = ~~(a / 2) + (a % 2);
    b = ~~(b / 2) + (b % 2);
    ++answer;
  }
  return answer;
}

const n = 8;
const a = 4;
const b = 7;

console.log(solution(n, a, b))