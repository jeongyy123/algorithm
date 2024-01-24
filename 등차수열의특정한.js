// function solution(a, d, included) {
//   let answer = 0;
//   for (let i = 0; i < included.length; i++) {
//     if (included[i]) {
//       answer += a + (d * i)
//     }
//   }
//   return answer;
// }
function solution(a, d, included) {
  let answer = 0;
  included.forEach((val, idx) => {
    (val) ? answer += a + (d * idx) : 0
  })
  return answer;
}

const a = 3;
const d = 4;
const included = [true, false, false, true, true];

solution(a, d, included)