// https://school.programmers.co.kr/learn/courses/30/lessons/118666
function solution(survey, choices) {
  // survey를 choice로 비교하기
  // 같다면 뭐가 더 큰지 비교
  let answer = [];
  for (let i = 0; i < choices.length; i++) {
    choices[i] >= 4 ? (choices[i] = 4 ? (survey[i][0] > survey[i][1] ? answer.push(survey[i][0]) : answer.push(survey[i][1])) : answer.push(survey[i][1])) : answer.push(survey[i][1])
  }
}

const survey1 = ["AN", "CF", "MJ", "RT", "NA"];
const survey2 = ["TR", "RT", "TR"];

const choices1 = [5, 3, 2, 7, 5];
const choices2 = [7, 1, 3];

console.log(solution(survey1, choices1))
console.log(solution(survey2, choices2))
