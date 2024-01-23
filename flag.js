// function solution(a, b, flag) {
//   if (flag === true) {
//     return a + b
//   } else {
//     return a - b;
//   }
// }

function solution(a, b, flag) {
  let answer = 0;
  flag === true ? answer = (a + b) : answer = (a - b);
  return answer
}