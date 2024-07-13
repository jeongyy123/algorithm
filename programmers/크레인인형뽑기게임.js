function solution(board, moves) {
  let tempSet = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    tempSet.push(board[board[0].length][moves[i] - 1].shift())
    if (tempSet[tempSet.length - 1] === tempSet[tempSet.length - 2]) {
      tempSet.pop();
      tempSet.pop();
      count += 2;
    }
  }
  return count;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
// board[0,0][0,1][0,2][0,3][0,4]
// board[1,0][1,1][1,2][1,3][1,4]
// board[2,0][2,1][2,2][2,3][2,4]
// board[3,0][3,1][3,2][3,3][3,4]
// board[4,0][4,1][4,2][4,3][4,4]

const moves = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(board, moves))