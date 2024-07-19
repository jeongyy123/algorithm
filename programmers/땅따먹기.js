function solution(land) {
  let val = Math.max(...land[0]);
  let idx = land[0].indexOf(val);
  let answer = val;

  for (let i = 1; i < land.length; i++) {
    let arr = land[i].filter((val, ind) => ind !== idx);
    val = Math.max(...arr)
    idx = arr.indexOf(val)
    answer += val;
  }
  return answer;
}

// 공통된 인덱스를 제외한 매 행의 최대값끼리 더하면 최대가 되는 줄 알았으나
// 더한 값이 최대가 되어야하는 문제.

function solution(land) {
  // 2중 배열안에서 전 인덱스 배열에서 가장 최고값을 배얄에 계속해서 더해서 맨 마직막 배열에서 가장 큰 값을 반환.
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let maxPrev = Math.max(...land[i - 1].filter((_, idx) => idx !== j));
      land[i][j] += maxPrev;
      console.log('maxPrev', maxPrev)
      console.log(`${j}번째`, land)
    }
  }
  return Math.max(...land[land.length - 1]);
}


const land1 = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]] // 16
const land2 = [[3, 5, 6, 7], [3, 5, 6, 7], [3, 5, 6, 7]] // 7+6+7 = 20
const land3 = [[1, 1, 3, 1], [2, 3, 2, 2], [1, 4, 1, 1]] // 9

console.log(solution(land1))
console.log(solution(land2))
console.log(solution(land3))
