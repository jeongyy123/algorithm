// function solution(array) {
//   const count = {};

//   for (let num of array) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   let maxCount = 0;
//   let mode = -1;
//   let countOfModes = 0;

//   for (let num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       mode = parseInt(num);
//       countOfModes = 1;
//     } else if (count[num] === maxCount) {
//       countOfModes++;
//     }
//   }

//   return countOfModes > 1 ? -1 : mode;
// }

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}


const array1 = [1, 2, 3, 3, 3, 4]
const array2 = [1, 1, 2, 2]
const array3 = [1]

console.log(solution(array1))
console.log(solution(array2))
console.log(solution(array3))

//Others

