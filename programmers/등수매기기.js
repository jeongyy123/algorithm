function solution(score) {
  let avgList = score.map(([eng, math]) => (eng + math) / 2);

  let sortedAvgList = [...avgList].sort((a, b) => b - a);

  let ranks = avgList.map((avg) => sortedAvgList.indexOf(avg) + 1);

  return ranks;
}

const score1 = [[80, 70], [90, 50], [40, 70], [50, 80]]
const score2 = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]

console.log(solution(score1))
console.log(solution(score2))

// Others
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
