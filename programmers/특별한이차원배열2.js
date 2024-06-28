function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

const arr1 = [[5, 192, 33], [192, 72, 95], [33, 95, 999]]
const arr2 = [[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]

console.log(solution(arr1))
console.log(solution(arr2))