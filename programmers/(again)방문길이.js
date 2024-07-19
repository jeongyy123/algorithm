function solution(dirs) {
  let startPostion = [0, 0]; // [x, y]
  let movement = [];
  dirs = dirs.replaceAll(/([UDRL])\1{5,}/g, '$1$1$1$1$1')

  for (let i = 0; i < dirs.length; i++) {
    switch (dirs[i]) {
      case 'U':
        // console.log('U startPostion', startPostion)
        // movement.push([startPostion[0], startPostion[1]++], [startPostion])
        movement.push([startPostion[0], startPostion[1]++])
        break;
      case 'D':
        // console.log('D startPostion', startPostion)
        // movement.push([startPostion[0], startPostion[1]--], [startPostion])
        movement.push([startPostion[0], startPostion[1]--])

        break;
      case 'R':
        // console.log('R startPostion', startPostion)
        // movement.push([startPostion[0]++, startPostion[1]], [startPostion])
        movement.push([startPostion[0]++, startPostion[1]])
        break;
      case 'L':
        // console.log('L startPostion', startPostion)
        // movement.push([startPostion[0]--, startPostion[1]], [startPostion])
        movement.push([startPostion[0]--, startPostion[1]])
        break;
    }
  }
  console.log(movement)
  let count = movement.length;

  for (let i = 0; i < movement.length; i++) {
    for (let j = i + 1; j < movement.length; j++) {
      if (movement[i + 1] && movement[j + 1]) {
        // console.log('1', (movement[i][0] === movement[j][0]))
        // console.log('2', movement[i][1] === movement[j][1])
        // console.log('3', movement[i + 1][0] === movement[j + 1][0])
        // console.log('4', movement[i + 1][1] === movement[j + 1][1])
        // console.log('count', count)
        if (movement[i][0] === movement[j][0] && movement[i][1] === movement[j][1]
          && movement[i + 1][0] === movement[j + 1][0] && movement[i + 1][1] === movement[j + 1][1]) {
          count -= 2;
        }
      }
    }
    if (Math.abs(movement[i][0]) > 5 || Math.abs(movement[i][1]) > 5) {
      count--;
    }

  }
  return count;
}
// 시작좌표와 끝좌표가 일치하면 기록과 일치하면 동일한 곳으로 봄
// [[[0,0],[1,0]], [[0,0],[1,0]]]   기록

console.log(solution("ULURRDLLU"))
console.log(solution("LULLLLLLU"))
console.log(solution("LLLLLLUURRRDDLURL"))// f