function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (let n of d) {
    if (budget >= n) {
      budget -= n
      count++
    }
  }

  return count
}

const d1 = [1, 3, 2, 5, 4]
const d2 = [2, 2, 3, 3]

const budget1 = 9;
const budget2 = 10;

console.log(solution(d1, budget1))
console.log(solution(d2, budget2))

//Others
function solution(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {
    return count + ((budget -= price) >= 0);
  }, 0);
}