function solution(arr) {
  let answer = [];

  for (let num of arr) {
    for (let i = 0; i < num; i++) {
      answer.push(num) * num
    }
  }
  return answer;
}

const arr1 = [5, 1, 4];
const arr2 = [6, 6];
const arr3 = [1];

console.log(solution(arr1))
console.log(solution(arr2))
console.log(solution(arr3))

//Others
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
