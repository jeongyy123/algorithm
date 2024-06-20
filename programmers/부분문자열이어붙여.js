function solution(my_strings, parts) {
  let answer = '';
  for (let i = 0; i < my_strings.length; i++) {
    for (let j = 0; j < parts.length; j++) {
      if (i === j) {
        answer += my_strings[i].slice(parts[j][0], parts[j][1] + 1)
      }
    }
  }
  return answer;
}

const my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
const parts = [[0, 4], [1, 2], [3, 5], [7, 7]];

console.log(solution(my_strings, parts))