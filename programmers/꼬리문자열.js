// function solution(str_list, ex) {
//   let answer = '';

//   for (let i = 0; i < str_list.length; i++) {
//     str_list[i].includes(ex) ? 0 : answer += str_list[i]
//   }

//   return answer;

// }
function solution(str_list, ex) {
  return str_list.filter(str => !str.includes(ex)).join('')
}

const str_list1 = ["abc", "def", "ghi"];
const str_list2 = ["abc", "bbc", "cbc"];

const ex1 = "ef";
const ex2 = "c";

console.log(solution(str_list1, ex1))