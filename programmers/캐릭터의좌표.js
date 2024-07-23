function solution(keyinput, board) {
  let location = [0, 0]
  console.log('(Math.abs(location[0])', (Math.abs(location[0])))
  console.log('Math.floor(board[0] / 2)', Math.floor(board[0] / 2))
  console.log('(Math.abs(location[1])', (Math.abs(location[1])))
  console.log('Math.floor(board[1] / 2)', Math.floor(board[1] / 2))

  for (let key of keyinput) {
    if (Math.abs(location[0]) <= Math.floor(board[0] / 2) && Math.abs(location[1]) <= Math.floor(board[1] / 2)) {
      switch (key) {
        case "left":
          location[0] -= 1;
          break;
        case "right":
          location[0] += 1;
          break;
        case "up":
          location[1] += 1;
          break;
        case "down":
          location[1] -= 1;
          break;
      }
      console.log('location1', location)
    } else {
      Math.abs(location[0]) > Math.floor(board[0] / 2) ? location[0] = Math.floor(board[0] / 2) * (location[0] / Math.abs(location[0])) : location[1] = Math.floor(board[1] / 2) * (location[1] / Math.abs(location[1]))
      console.log('location2', location)
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