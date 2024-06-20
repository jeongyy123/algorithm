function solution(n) {
  let answer = [];
  answer.push(n)
  while (n !== 1) {
    if (n % 2 === 0 && n !== 1) {
      answer.push(n / 2);
      n /= 2
    } else if (n % 2 !== 0 && n !== 1) {
      answer.push(3 * n + 1);
      n = 3 * n + 1
    } else {
      answer.push(1);
      break;
    }
  }
  return answer;
}


const n = 10;
console.log(solution(n))