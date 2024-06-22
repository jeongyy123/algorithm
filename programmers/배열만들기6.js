function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i])
    } else if (answer.length !== 0) {
      if (answer[answer.length - 1] === arr[i]) {
        answer.pop();
      } else {
        answer.push(arr[i])
      }
    }

  }
  return answer.length === 0 ? [-1] : answer;
}

// function solution(arr) {
//   let stk = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (stk.length === 0) {
//       stk.push(arr[i])
//       i++
//     } else if (stk[stk.length - 1] === arr[i]) {
//       stk.pop();
//       i++
//     } else {
//       stk.push(arr[i]);
//       i++;
//     }
//   }
//   return stk.length === 0 ? [-1] : stk;
// }


const arr1 = [0, 1, 1, 1, 0];
const arr2 = [0, 1, 0, 1, 0];
const arr3 = [0, 1, 1, 0];

console.log(solution(arr1))
console.log(solution(arr2))
console.log(solution(arr3))