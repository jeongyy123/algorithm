function solution(cards1, cards2, goal) {
  let answer;
  // shift이용
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift()
    } else {
      return 'No'
    }
  }
  return 'Yes'
}

const cards11 = ["i", "drink", "water"]
const cards12 = ["i", "water", "drink"]


const cards21 = ["want", "to"]
const cards22 = ["want", "to"]


const goal1 = ["i", "want", "to", "drink", "water"]
const goal2 = ["i", "want", "to", "drink", "water"]

console.log(solution(cards11, cards21, goal1))
console.log(solution(cards12, cards22, goal2))
