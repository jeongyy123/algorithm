function solution(array, n) {
  // n과 배열 요소 숫자간의 차이 배열 담기
  let arr = array.slice().map(v => Math.abs(n - v));
  let answer = [];

  // 가장 가까운 수 모아 배열 담기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Math.min(...arr)) {
      answer.push(i)
    }
  }

  // 가장 가까운 수가 여러 개의 경우 더 작은 수 찾기 
  for (let i = 1; i < answer.length + 1; i++) {
    if (array[answer[i - 1]] > array[answer[i]]) {
      return array[answer[i]]
    } else {
      return array[answer[i - 1]]
    }
  }
}


const array1 = [3, 10, 28];
const array2 = [10, 11, 12];
const array3 = [1, 4, 2, 1]

const n1 = 20;
const n2 = 13;
const n3 = 3;

console.log(solution(array1, n1))
console.log(solution(array2, n2))
console.log(solution(array3, n3)) // 2


//Others
// 숫자 차이를 정렬하고 제일 작은 수를 뽑으면 되는 일이었는데! 
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}