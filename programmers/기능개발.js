function solution(progresses, speeds) {
  let answer = [];

  // 남은 작업 일수
  const restPro = progresses.map((val, idx) => Math.ceil((100 - val) / speeds[idx]));

  let maxDays = restPro[0] // 첫번째 기능 완성까지 남은 일수
  let count = 1; // 배포되는 기능의 수

  for (let i = 1; i < restPro.length; i++) {
    if (restPro[i] <= maxDays) {
      count++
    } else {
      answer.push(count);
      count = 1;
      maxDays = restPro[i]
    }
  }
  answer.push(count)
  return answer;
}

//작업 진도
const progresses1 = [93, 30, 55]
const progresses2 = [95, 90, 99, 99, 80, 99]

//작업 속도
const speeds1 = [1, 30, 5]
const speeds2 = [1, 1, 1, 1, 1, 1]

console.log(solution(progresses1, speeds1))
console.log(solution(progresses2, speeds2))
