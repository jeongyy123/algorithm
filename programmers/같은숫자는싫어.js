//stack/queue 문제

function solution(arr) {
  return arr.filter((val, idx) => arr[idx] !== arr[idx + 1]);
}

const arr = [1, 1, 3, 3, 0, 1, 1]

console.log(solution(arr))

//Others
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
  // val !== arr[idx + 1] 이렇게 쓸 수도 있구나
}