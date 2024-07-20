// 다시 해보기
function solution(emergency) {
  let answer = [];

  for (let i = 1; i < emergency.length + 1; i++) {
    let maxVal = Math.max(...emergency);
    let maxIdx = emergency.indexOf(maxVal);

    answer[maxIdx] = i;

    emergency[maxIdx] = 0;
  }
  return answer;
}

const emergency1 = [3, 76, 24];
const emergency2 = [1, 2, 3, 4, 5, 6, 7];
const emergency3 = [30, 10, 23, 6, 100];

console.log(solution(emergency1));

//Others
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map(v => sorted.indexOf(v) + 1);
}
