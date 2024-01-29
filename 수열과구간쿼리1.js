function solution(arr, queries) {
  for (const query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      arr[i] += 1
    }
  }
  return arr;
}

const arr = [5, 4, 3, 2, 1]
const queries = [[2, 3]]


console.log(solution(arr, queries)) // [5, 4, 4, 3, 1]