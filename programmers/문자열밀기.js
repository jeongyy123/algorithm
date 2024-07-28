// function solution(a, b) {
//   let arr = a.split('');
//   let length = arr.length;
//   let count = 0;

//   if (a === b) {
//     return 0
//   } else {
//     for (let i = 0; i < length; i++) {
//       let lastWord = arr.pop();
//       arr.unshift(lastWord);
//       count++;
//       if (arr.join('') === b) {
//         return count;
//       }
//     }
//     return a === b ? 0 : -1
//   }
// }

const a1 = "hello"
const a2 = "apple"
const a3 = "atat"
const a4 = "abc"

const b1 = "ohell"
const b2 = "elppa"
const b3 = "tata"
const b4 = "abc"


console.log(solution(a1, b1))
console.log(solution(a2, b2))
console.log(solution(a3, b3))
console.log(solution(a4, b4))

//Others
function solution(a, b) {
  return (b + b).indexOf(a);
}
