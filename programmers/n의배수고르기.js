function solution(n, numlist) {
  let answer = [];
  for (let num of numlist) {
    (num % n === 0) ? answer.push(num) : 0
  }
  return answer;
}