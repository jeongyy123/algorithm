//https://school.programmers.co.kr/learn/courses/30/lessons/12944
function solution(arr) {
  var answer = arr.reduce((acc, cur) => acc + cur, 0);
  return answer / arr.length;
}
