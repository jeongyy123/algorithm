function solution(board, k) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j]
      }
    }
  }

  return answer;
}

const board1 = [[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]]
const k1 = 2
console.log(solution(board1, k1)) // 30