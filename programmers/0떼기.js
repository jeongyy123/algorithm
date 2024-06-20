// function solution(n_str) {
//   // 순차적으로 0의 위치를 찾기 (n인덱스의 값은 0, n+1 인덱스의 값은 자연수인 범위)
//   if (n_str[0] === '0') {
//     for (let i = 0; i < n_str.length; i++) {
//       if (n_str[i] === '0' && n_str[i + 1] !== '0') {
//         return n_str.slice(i + 1, n_str.length);
//       }
//     }
//   }
//   return n_str;
// }

function solution(n_str) {
  return n_str.replace(/^0+/, '')
}

const n_str1 = '0010';
const n_str2 = '854020';

console.log(solution(n_str1));
console.log(solution(n_str2));


//Others (I think they are genius...)
const solution = (str) => String(Number(str));
