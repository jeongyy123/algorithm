function solution(rank, attendance) {
  let answer = [];
  const availableRank = rank.filter((val, idx) => attendance[idx] === true).sort((a, b) => a - b);

  for (let i = 0; i < 3; i++) {
    answer.push(rank.indexOf(availableRank[i]))
  }

  const [a, b, c] = answer;
  return (10000 * a) + (100 * b) + c;
}


const rank1 = [3, 7, 2, 5, 4, 6, 1]
const rank2 = [1, 2, 3]
const rank3 = [6, 1, 5, 2, 3, 4]


const attendance1 = [false, true, true, true, true, false, false];
const attendance2 = [true, true, true];
const attendance3 = [true, false, true, false, false, true];

console.log(solution(rank1, attendance1))
console.log(solution(rank2, attendance2))
console.log(solution(rank3, attendance3))