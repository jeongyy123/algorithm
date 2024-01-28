function solution(arr, idx) {
  return arr.findIndex((v, i) =>
    v === 1 && i >= idx)
}


const arr = [1, 1, 1, 1, 0]
const idx = 3;

console.log(solution(arr, idx))