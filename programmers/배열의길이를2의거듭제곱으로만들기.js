function solution(arr) {
  if ((arr.length & (arr.length - 1)) === 0) {
    return arr;
  } else {
    while ((arr.length & (arr.length - 1)) !== 0) {
      arr.push(0)
    }
    return arr
  }
}

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [58, 172, 746, 89]

console.log(solution(arr1))
console.log(solution(arr2))


//Others
const solution = a => {
  let l = a.length;
  while ((l & -l) != l) a.push(0), l = a.length;
  return a;
}