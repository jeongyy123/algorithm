function solution(s) {
  let answer = "";
  let arr = s.split(" ");
  const arrNum = arr.map((val) => Number(val));
  const max = String(Math.max(...arrNum));
  const min = String(Math.min(...arrNum));
  answer = `${min} ${max}`
  return answer;
}

const s1 = "1 2 3 4";
const s2 = "-1 -2 -3 -4";
const s3 = "-1 -1"

console.log(solution(s1))
console.log(solution(s2))
console.log(solution(s3))