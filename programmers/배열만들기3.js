function solution(arr, intervals) {
  let answer = [];

  for (let i = 0; i < intervals.length; i++) {
    answer.push(...arr.slice(intervals[i][0], intervals[i][1] + 1))
  }
  return answer;
}

const arr = [1, 2, 3, 4, 5];
const intervals = [[1, 3], [0, 4]];

console.log(solution(arr, intervals))


//Others

function solution(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}