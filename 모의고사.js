//https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const a = [1, 2, 3, 4, 5];
  const b = [2, 1, 2, 3, 2, 4, 2, 5];
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let correct = [0, 0, 0];
  const result = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === a[i]) {
      correct[0] += 1;
    }
    if (answers[i] === b[i]) {
      correct[1] += 1;
    }
    if (answers[i] === c[i]) {
      correct[2] += 1;
    }
  }
}

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

console.log(solution(answers1));
console.log(solution(answers2));
