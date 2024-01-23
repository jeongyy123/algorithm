//https://school.programmers.co.kr/learn/courses/30/lessons/138477
// function solution(k, score) {
//   //score에서 하나씩 arr(Set)배열에 넣기
//   //arr배열의 가장 작은 수를 anwer에 넣기
//   //score[0]~score[2] 위를 따르되 그 이후는
//   //만약, score[i]가 arr값과 비교하여 작으면 pass, 크면 arr에 넣기
//   let setArr = new Set();
//   let answer = [];
//   for (let i = 0; i < score.length; i++) {
//     if (i < 3) {
//       setArr.add(score[i]);
//       answer.push(Math.min(...setArr));
//     } else {
//       Math.min(...setArr) <= score[i] ? setArr.add(score[i]) : 0;

//     }
//   }
//   console.log(setArr);
//   console.log(answer);
// }

function solution(k, score) {
  var answer = [];
  var nums = [];

  score.forEach((num) => {
    nums.push(num);
    nums.sort((a, b) => b - a).splice(k);
    answer.push(Math.min.apply(null, nums));
  });

  return answer;
}

const k1 = 3;
const k2 = 4;

const score1 = [10, 100, 20, 150, 1, 100, 200];
const score2 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(k1, score1));
console.log(solution(k2, score2));
