function solution(s) {
  let checkEnga = /[a-z]/;
  let answer = "";

  const splitedStrings = s.split(' ');

  for (let i = 0; i < splitedStrings.length; i++) {
    if (!checkEnga.test(splitedStrings[i][0])) {
      console.log(splitedStrings[i][0].toUpperCase())
    }
  }
}

const s1 = "3people unFollowed me";
const s2 = "for the last week";

console.log(solution(s1))
console.log(solution(s2))
