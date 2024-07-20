function solution(box, n) {
  return (Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n))
}

const box = [10, 8, 6];
const n = 3

console.log(solution(box, n))