function solution(arr, flag) {
  let answer = [];

  // flag[i] true 면 arr[i]를 answer에 arr[i]*2번 추가
  // flag[i] false면 arr[i]개를 answer에서 지우기

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i])
      }
    } else if (!flag[i]) {
      for (let j = 0; j < arr[i]; j++) {
        answer.pop()
      }
    }
  }
  return answer;
}

const arr = [3, 2, 4, 1, 3];

const flag = [true, false, true, false, false];

console.log(solution(arr, flag))