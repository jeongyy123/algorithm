function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }
    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i])
      i++
    } else {
      stk.pop();
    }
  }
  return stk;
}

// function solution(arr) {
//   var stk = [];
//   let i = 0;
//   while (i < arr.length) {
//     if (!stk.length) {
//       stk.push(arr[i]);
//       i += 1;
//     }
//     if (stk.length && stk[stk.length - 1] < arr[i]) {
//       stk.push(arr[i]);
//       i += 1;
//     }
//     if (stk.length && stk[stk.length - 1] >= arr[i]) {
//       stk.pop();
//       continue;
//     }
//   }
//   return stk;
// }

const arr = [1, 4, 2, 5, 3]; // 5
console.log(solution(arr))