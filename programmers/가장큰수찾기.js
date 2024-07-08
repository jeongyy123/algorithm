function solution(array) {
  const maxNum = Math.max(...array);
  const idxMaxNum = array.indexOf(maxNum);

  return [maxNum, idxMaxNum]
}

const array1 = [1, 8, 3]
const array2 = [9, 10, 11, 8]

console.log(solution(array1))
console.log(solution(array2))