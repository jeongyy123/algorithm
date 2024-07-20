function solution(numbers, direction) {
  let tmp;
  switch (direction) {
    case "right":
      tmp = numbers.pop();
      numbers.unshift(tmp);
      break;
    case "left":
      tmp = numbers.shift();
      numbers.push(tmp)
      break;
  }
  return numbers;
}

const numbers = [4, 455, 6, 4, -1, 45, 6]
const direction = 'left'

console.log(solution(numbers, direction))