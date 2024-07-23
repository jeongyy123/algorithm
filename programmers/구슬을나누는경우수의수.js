function solution(balls, share) {
  return Math.round(factiorial(balls) / (factiorial(balls - share) * factiorial(share)));
}

function factiorial(n) {
  let answer = 1;
  for (let i = n; i > 0; i--) {
    answer *= i
  }
  return answer;
}

const balls = 30

const share = 29

console.log(solution(balls, share))