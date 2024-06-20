//https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  var x = ~~Math.sqrt(n);
  return x ** 2 === n ? (x + 1) ** 2 : -1;
}
