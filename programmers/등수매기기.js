function solution(score) {
  let answer = [];

  for (let i = 0; i < score.length; i++) {
    answer.push(score[i].reduce((a, c) => a + c, 0) / 2)
  }
  for (let i = 1; i < answer.length + 1; i++) {
    answer[answer.indexOf(Math.max(...answer))] = i;
  }
  return answer;
}

const score1 = [[80, 70], [90, 50], [40, 70], [50, 80]]
const score2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]

console.log(solution(score1))
console.log(solution(score2))