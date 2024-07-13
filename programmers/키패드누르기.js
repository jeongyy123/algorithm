function solution(numbers, hand) {
  let leftWhereAmI = [4, 1];
  let rightWhereAmI = [4, 3];
  let keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    0: [4, 2]
  }
  let answer = '';

  for (let number of numbers) {
    let n = keypad[number]

    if (number === 1 || number === 4 || number === 7) {
      answer += 'L'
      leftWhereAmI = n
    } else if (number === 3 || number === 6 || number === 9) {
      answer += 'R'
      rightWhereAmI = n
    } else {

      let difLeft = Math.abs(leftWhereAmI[0] - n[0]) + Math.abs(leftWhereAmI[1] - n[1])
      let difRight = Math.abs(rightWhereAmI[0] - n[0]) + Math.abs(rightWhereAmI[1] - n[1])

      if (difLeft < difRight) {
        answer += 'L'
        leftWhereAmI = n
      } else if (difLeft > difRight) {

        rightWhereAmI = n
        answer += 'R'
      } else {
        if (hand === 'left') {
          answer += 'L'
          leftWhereAmI = n
        } else {
          answer += 'R'
          rightWhereAmI = n
        }
      }
    }
  }
  return answer;
}

const numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const hand1 = "right"
const hand2 = "left"
const hand3 = "right"

console.log(solution(numbers1, hand1), 'LRLLLRLLRRL', solution(numbers1, hand1) === "LRLLLRLLRRL") //"LRLLLRLLRRL"
// console.log(solution(numbers2, hand2)) //"LRLLRRLLLRR"
// console.log(solution(numbers3, hand3)) //"LLRLLRLLRL"