function solution(arr) {
  let answer = [];
  let firstIdx = 0;
  let secondIdx = 0;
  let count = arr.filter(e => 2 === e).length;
  if (count < 1) {
    return [-1];
  }
  if (arr.indexOf(2) || "0") {
    firstIdx = arr.indexOf(2);
    if ((arr.length - arr.indexOf(2) - 1) || "0") {
      secondIdx = arr.length - arr.indexOf(2) - 1;
    }
  }

  answer = arr.slice(Number(firstIdx), Number(secondIdx + 1))
  return answer;
}

const arr1 = [1, 2, 1, 4, 5, 2, 9]
const arr2 = [1, 2, 1]
const arr3 = [1, 1, 1]
const arr4 = [1, 2, 1, 2, 1, 10, 2, 1]
const arr5 = [2, 2, 3]

// console.log(solution(arr1))
// console.log(solution(arr2))
// console.log(solution(arr3))
// console.log(solution(arr4))
console.log(solution(arr5))


// console.log(arr1.length - arr1.indexOf(2) - 1)