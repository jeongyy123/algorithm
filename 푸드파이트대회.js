//https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  let answer = "";
  let answer2 = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }
  answer2 = answer.split("").reverse().join("");
  return answer + "0" + answer2;
}

const a = [1, 3, 4, 6];
const b = [1, 7, 1, 2];

console.log(solution(a));
console.log(solution(b));
