function solution(cipher, code) {
  let answer = [];
  for (let i = code - 1; i < cipher.length; i += code) {
    answer.push(cipher[i]);
    // i += code - 1
  }
  return answer.join('')
}


const cipher1 = "dfjardstddetckdaccccdegk";
const cipher2 = "pfqallllabwaoclk";

const code1 = 4
const code2 = 2

console.log(solution(cipher1, code1))
console.log(solution(cipher2, code2))
