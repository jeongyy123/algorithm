// 한 점에서 가장 긴 좌표를 구하고, 그 놈으로 삼각형 구해서 사각형 크기 구하기
function solution(dots) {
  let answer = [];
  let [x1, y1] = dots[0];

  for (let i = 1; i < dots.length; i++) {
    let [x2, y2] = dots[i];
    answer.push(Math.sqrt(Math.abs(x2 - x1) ** 2 + Math.abs(y2 - y1) ** 2))
  }

  const maxIdx = answer.indexOf(Math.max(...answer))

  let [x2, y2] = dots[maxIdx + 1]

  return Math.abs(x2 - x1) * Math.abs(y2 - y1)
}

const dots1 = [[1, 1], [2, 1], [2, 2], [1, 2]]
const dots2 = [[-1, -1], [1, 1], [1, -1], [-1, 1]]
const dots3 = [[0, 1], [10, 1], [10, 3], [0, 3]]


console.log(solution(dots1))
console.log(solution(dots2))
console.log(solution(dots3)) //20


// Others
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}