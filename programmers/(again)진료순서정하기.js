// 다시 해보기
function solution(emergency) {
  let indexedEmergency = emergency.map((val, idx) => ({ val, idx }));

  indexedEmergency.sort((a, b) => b.val - a.val);

  let answer = new Array(emergency.length);
  indexedEmergency.forEach((item, idx) => {
    answer[item.idx] = idx + 1;
  })
  return answer;
}

const emergency1 = [3, 76, 24];
const emergency2 = [1, 2, 3, 4, 5, 6, 7];
const emergency3 = [30, 10, 23, 6, 100];

console.log(solution(emergency1));