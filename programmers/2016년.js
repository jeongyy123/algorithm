//https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let answer = "";
  switch (a) {
    case 1:
      if (0 < b && b <= 31) answer = week[b % 7];
      break;
    case 2:
      if (0 < b && b <= 29) answer = week[(b + 3) % 7];
      break;
    case 3:
      if (0 < b && b <= 31) answer = week[(b + 4) % 7];
      break;
    case 4:
      if (0 < b && b <= 30) answer = week[b % 7];
      break;
    case 5:
      if (0 < b && b <= 31) answer = week[(b + 2) % 7];
      break;
    case 6:
      if (0 < b && b <= 30) answer = week[(b + 5) % 7];
      break;
    case 7:
      if (0 < b && b <= 31) answer = week[b % 7];
      break;
    case 8:
      if (0 < b && b <= 31) answer = week[(b + 3) % 7];
      break;
    case 9:
      if (0 < b && b <= 30) answer = week[(b + 6) % 7];
      break;
    case 10:
      if (0 < b && b <= 31) answer = week[(b + 1) % 7];
      break;
    case 11:
      if (0 < b && b <= 30) answer = week[(b + 4) % 7];
      break;
    case 12:
      if (0 < b && b <= 31) answer = week[(b + 6) % 7];
      break;
  }
  return answer;
}

const a = 3;
const b = 3;

console.log(solution(a, b));

// console.log((b % 7) - 5);
