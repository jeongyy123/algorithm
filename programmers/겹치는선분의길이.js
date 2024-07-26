function solution(lines) {
  let arr = [];
  let answer = [];
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      if (lines[i][1] > lines[j][0]) {
        arr.push([lines[j][0], lines[i][1]])
      }
    }
  }


  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      answer.push(arr[i][1] - arr[i][0])
    }
    return Math.max(...answer)
  }
  return 0;
}

const lines1 = [[0, 1], [2, 5], [3, 9]]
const lines2 = [[-1, 1], [1, 3], [3, 9]]
const lines3 = [[0, 5], [3, 9], [1, 10]]
const lines4 = [[4, 7], [4, 5], [6, 7]]

console.log(solution(lines1)) //2
console.log(solution(lines2)) //0
console.log(solution(lines3)) //8
console.log(solution(lines4)) //2

// 1,2,3,4,5,9