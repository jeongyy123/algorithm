function solution(score) {
  let avg = [];
  let lank = [];

  for (let i = 0; i < score.length; i++) {
    avg.push(score[i].reduce((a, c) => a + c, 0) / 2)
  }

  for (let i = 1; i < avg.length + 1; i++) {
    if (avg.sort((a, b) => b - a)[i - 1] === avg.sort((a, b) => b - a)[i]) {
      lank[i], lank[i] = i
    }
  }

  // for (let i = 1; i < avg.length + 1; i++) {
  //   avg[avg.indexOf(Math.max(...avg))] = i;
  // }
  return lank;
}

const score1 = [[80, 70], [90, 50], [40, 70], [50, 80]]
const score2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]

console.log(solution(score1))
console.log(solution(score2))