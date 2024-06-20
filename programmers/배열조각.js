function solution(arr, query) {
  for (const idx of query) {
    if (idx % 2 === 0) {
      arr = arr.slice(0, idx + 1)
    } else {
      arr = arr.slice(idx)
    }
  }
  return arr;
}

const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];
console.log(solution(arr, query))