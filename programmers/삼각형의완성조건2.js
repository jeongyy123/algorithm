function solution(sides) {
  let [a, b] = sides;
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);
  let count = 0;

  for (let i = (maxNum - minNum + 1); i < maxNum; i++) {
    count++;
  }
  for (let i = maxNum + 1; i < maxNum + minNum + 1; i++) {
    count++
  }
  return count
}

const sides1 = [1, 2]
const sides2 = [3, 6]
const sides3 = [11, 7]

console.log(solution(sides1))
console.log(solution(sides2))
console.log(solution(sides3))

//Others
function solution(sides) {
  return Math.min(...sides) * 2 - 1
}