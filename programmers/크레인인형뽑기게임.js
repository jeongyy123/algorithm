function solution(board, moves) {
  let tempArr = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let doll = board[j][moves[i] - 1];
      if (doll !== 0) {
        tempArr.push(doll);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }

    let aftertempArr = tempArr[tempArr.length - 1];
    let beforetempArr = tempArr[tempArr.length - 2];


    if (aftertempArr === beforetempArr && aftertempArr) {
      tempArr.pop();
      tempArr.pop();
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
//        1    2    3    4    5
const board1 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
// board[0,0][0,1][0,2][0,3][0,4]
// board[1,0][1,1][1,2][1,3][1,4]
// board[2,0][2,1][2,2][2,3][2,4]
// board[3,0][3,1][3,2][3,3][3,4]
// board[4,0][4,1][4,2][4,3][4,4]
//        1    2    3    4    5

const moves = [1, 5, 3, 5, 1, 2, 1, 4]
const moves1 = [1, 2, 3, 4, 5]

// console.log(solution(board, moves))
console.log(solution(board1, moves1)) // 0


// Others
const transpose = matrix =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map(row =>
    row.reverse().filter(el => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};