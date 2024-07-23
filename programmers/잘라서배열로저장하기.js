function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n))
  }
  return answer;
}

const my_str1 = "abc1Addfggg4556b"
const my_str2 = "abcdef123"

const n1 = 6
const n2 = 3

console.log(solution(my_str1, n1))
console.log(solution(my_str2, n2))

//Others
// 정규표현식 객체리터럴 사용을 이렇게 하면 되는군!
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}