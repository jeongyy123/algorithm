function solution(arr) {
  const firstIndex = arr.indexOf(2);

  if (firstIndex === -1) return [-1];

  const secondIndex = arr.lastIndexOf(2);

  if (firstIndex === secondIndex) {
    return [2];
  }
  return arr.slice(firstIndex, secondIndex + 1);
}

const arr1 = [1, 2, 1, 4, 5, 2, 9]
const arr2 = [1, 2, 1]
const arr3 = [1, 1, 1]
const arr4 = [1, 2, 1, 2, 1, 10, 2, 1]
const arr5 = [2, 2, 3]

// console.log(solution(arr1))
// console.log(solution(arr2))
console.log(solution(arr3))
// console.log(solution(arr4))
// console.log(solution(arr5))


//Others
function solution(arr) {
  const from = arr.indexOf(2)
  const end = arr.lastIndexOf(2)

  return from === -1 ? [-1] : arr.slice(from, end + 1)
}