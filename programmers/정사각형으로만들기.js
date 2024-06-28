function solution(arr) {

  const row = arr.length;
  const col = arr[0].length;

  if (row > col) {
    let addedCol = new Array(row - col).fill(0)
    for (let i = 0; i < row; i++) {
      arr[i].push(...addedCol)
    }
  } else if (row < col) {
    let addedRow = new Array(col).fill(0)
    for (let i = 0; i < col - row; i++) {
      arr.push(addedRow);
    }
  }
  return arr;
}

const arr1 = [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]];
const arr2 = [[57, 192, 534, 2], [9, 345, 192, 999]];
const arr3 = [[1, 2], [3, 4]];
const arr4 = [[1, 1], [1, 1], [1, 1], [1, 1]]

// console.log(solution(arr1))
// console.log(solution(arr2))
// console.log(solution(arr3))
console.log(solution(arr4))
// 기댓값 〉 [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]