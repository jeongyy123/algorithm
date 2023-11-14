//https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
  var answer = 0;
  for (var x = 1; x < n + 1; x++) {
    if (n % x === 1) {
      answer = x;
      break;
    } else {
      continue;
    }
  }
  return answer;
}
