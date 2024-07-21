// function solution(num_list) {
//   let i = 0;
//   num_list.forEach(v => {
//     while (v !== 1) {
//       if (v % 2 === 0) {
//         v = parseInt(v / 2)
//       } else {
//         v = parseInt((v - 1) / 2)
//       }
//       i++;
//     }
//   })
//   return i;
// }


// Others
function solution(num_list) {
  return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}

const num_list = [12, 4, 15, 1, 14]

console.log(solution(num_list))