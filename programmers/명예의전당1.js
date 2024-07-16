//https://school.programmers.co.kr/learn/courses/30/lessons/138477
function solution(k, score) {
  // 3개만 담는 어레이의 최소값 반환
  let answer = [];
  let temp = [];
  for (let i = 0; i < score.length; i++) {
    if (temp.length < k) {
      temp.push(score[i])
      temp.sort((a, b) => b - a);
    } else if (score[i] > temp[temp.length - 1]) {
      temp[temp.length - 1] = score[i];
      temp.sort((a, b) => b - a);
    }
    answer.push(temp[temp.length - 1])
  }
  return answer
}



const k1 = 3; // 명예의 전당 목록의 점숨의 개수
const k2 = 4;

const score1 = [10, 100, 20, 150, 1, 100, 200]; // 가수들의 점수
const score2 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(k1, score1));
// console.log(solution(k2, score2));


//Others
function solution(k, score) {
  const stack = []
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c)
      stack.sort((a, b) => a - b)
    }
    else {
      stack.push(c)
      stack.sort((a, b) => a - b)
      stack.shift()
    }
    a.push(stack[0])
    return a
  }, [])
}