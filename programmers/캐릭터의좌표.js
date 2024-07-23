function solution(keyinput, board) {
  let location = [0, 0];
  const xLimit = Math.floor(board[0] / 2);
  const yLimit = Math.floor(board[1] / 2);

  for (let key of keyinput) {
    switch (key) {
      case "left":
        if (location[0] > -xLimit) {
          location[0] -= 1;
        }
        break;
      case "right":
        if (location[0] < xLimit) {
          location[0] += 1;
        }
        break;
      case "up":
        if (location[1] < yLimit) {
          location[1] += 1;
        }
        break;
      case "down":
        if (location[1] > -yLimit) {
          location[1] -= 1;
        }
        break;
    }
  }
  return location;
}

const keyinput1 = ["left", "right", "up", "right", "right"]
const keyinput2 = ["down", "down", "down", "down", "down"]
const keyinput3 = ["left", "left", "left", "right"]

const board1 = [11, 11]
const board2 = [7, 9]
const board3 = [3, 3]

console.log(solution(keyinput1, board1))
console.log(solution(keyinput2, board2))
console.log(solution(keyinput3, board3)) // [0,0]