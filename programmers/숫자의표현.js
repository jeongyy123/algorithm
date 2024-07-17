function solution(n) {
  let count = 0;
  for (let i = 1; i * (i + 1) / 2 <= n; i++) {
    if ((n - (i * (i - 1)) / 2) % i === 0) {
      count++
    }
  }
  return count;
}

const n = 15

console.log(solution(n))

//Others
function expressions(num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    if ((num % i == 0) && (i % 2 == 1)) {
      answer++;
    }
  }
  return answer;
}