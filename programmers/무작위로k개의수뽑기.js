function solution(arr, k) {
  let answer = [];
  let i = 0;

  while (i < arr.length && answer.length < k) {
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
    i++;
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}


const arr1 = [0, 1, 1, 2, 2, 3]
const arr2 = [0, 1, 1, 1, 1]

const k1 = 3;
const k2 = 4;


console.log(solution(arr1, k1))
console.log(solution(arr2, k2))


//Others
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}