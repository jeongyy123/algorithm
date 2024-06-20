// function solution(elements) {
//   let answer = [];
//   for (let i = 0; i < elements.length; i++) {
//     console.log("뒤돌지않고", elements.slice(i, i + 1))
//     answer = elements.slice(i, i + 1).map((val, idx) => {
//       val[idx] + val[idx + 1]
//     })
//   }
//   // console.log(answer)
// }

const solution = (elements) => {
  const sumSet = new Set();

  const len = elements.length;
  for (let i = 1; i <= len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      }
      else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % len];
      }
      sumSet.add(sum);
    }
  }

  // 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return
  return sumSet.size;
}

const elements = [7, 9, 1, 1, 4];
console.log(solution(elements))