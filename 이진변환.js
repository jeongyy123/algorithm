// function solution(s) {
//   let answer = [0, 0];
//   while (s !== "1") {
//     let arr = String(s).split('0');
//     answer[1] += arr.length - 1;
//     let sString = arr.join('');
//     s = parseInt(sString, 2);
//     answer[0] += 1;
//   }
//   return answer;
// }

function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    s = s.split('');
    let temp = s.filter(v => v === '1').length;
    answer[0]++;
    answer[1] += s.length - temp;
    s = temp.toString(2);
  }
  return answer
}


let s1 = "110010101001";
let s2 = "01110";
let s3 = "1111111";

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))

console.log(s1.split('0').join(''))